import './comicsList.scss';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

let ComicsList = () => {

    let [comicsList, setComicsList] = useState([]);
    let [offsetComics, setOffset] = useState(0);
    let {loading, error, getAllComics} = useMarvelService();

    
    useEffect(() => {
        onRequest(offsetComics)
    }, [])

    let onRequest = (offsetComics) => {
        getAllComics(offsetComics)
            .then(onComicsListLoaded)
    }

    let onComicsListLoaded = (newComicsList) => {
        setComicsList([...comicsList, ...newComicsList]);
        setOffset(offsetComics => offsetComics += 8);
    }


    function RenderComics(arr) {
        let itemsComics = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
                return (
                <li 
                    className="comics__item"
                    key = {i}
                >
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img" style={imgStyle}/>
                        <div className="comics__item-name">{item.name}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
                )
        })

        return (
            <ul className="comics__grid">
                {itemsComics}
            </ul>
        )
    }

    let comics = RenderComics(comicsList);
    let errorMessage = error ? <ErrorMessage/> : null;
    let spinner = loading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {comics}
            <button 
                // disabled={newItemLoading} 
                // style={{'display' : comicsEnded ? 'none' : 'block'}}
                className="button button__main button__long"
                onClick={() => onRequest(offsetComics)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )

}

export default ComicsList;