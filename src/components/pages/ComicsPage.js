// import {useState} from 'react';

import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';

let ComicsPage = () => {

    // let [comics, setComics] = useState(null); 

    // let onComicsSelected = (id) => {
    //     setComics(id)
    // }

    return (
        <>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;