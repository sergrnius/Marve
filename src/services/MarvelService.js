import {useHttp} from '../hooks/http.hook'

let useMarvelService = () => {

    let {loading, request, error, clearError} = useHttp();
 
    let _apiBase = 'https://gateway.marvel.com:443/v1/public';
    let _apiKey = 'apikey=15bd4f69dbe076cdeba091cdb8427ce8';
    let _baseOffset = 210;

    let getAllCharacters = async (offset = _baseOffset) => {
        let res = await request(`${_apiBase}/characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacters);
    }

    let getCharacter = async (id) => {
        let res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);
        return _transformCharacters(res.data.results[0])
    }

    let getComics = async (id) => {
        let res = await request(`${_apiBase}/comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    let getAllComics = async (offset = 1) => {
        let res = await request(`${_apiBase}/comics?limit=8offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    let getCharacterByName = async (name) => {
        // https://gateway.marvel.com:443/v1/public/characters?name=Thor&apikey=15bd4f69dbe076cdeba091cdb8427ce8
        const res = await request(`${_apiBase}/characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacters);
    }
    
    let _transformCharacters = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumb: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    let _transformComics = (comics) => {
        return {
            name: comics.title,
            id: comics.id,
            url: comics.url,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language:  comics.textObjects.language || 'en-us',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            price: comics.prices.price ? `${comics.prices.price}$` : 'not available',
            description: comics.description ? `${comics.description.slice(0, 210)}...` : 'There is no description for this comics'
        }
    }

    return {loading, error, getCharacter, getAllCharacters, clearError, getComics, getAllComics, getCharacterByName}
}

export default useMarvelService;