import {useState} from 'react';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import decoration from '../../resources/img/vision.png';
import CharSearchForm from '../CharSearchForm/CharSearchForm';

let MainPage = () => {

    let [char, setChar] = useState();

    let onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <>
            <RandomChar/>
            <div className="char__content">
                <CharList onCharSelected={onCharSelected}/>
                <div>
                    <CharInfo charId={char}/>   
                    <CharSearchForm/> 
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}

export default MainPage;