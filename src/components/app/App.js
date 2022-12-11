import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import {ComicsPage, MainPage, Page404} from '../pages';
import SingleComicLayout from '../pages/SingleComicsLayout/SingleComicLayout'
import SingleCharacterLayout from '../pages/SingleCharacterLayout/SingleCharacterLayout'
import SinglePage from '../pages/SinglePage/SinglePage' 
let App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/comics' element={<ComicsPage/>}/>
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} >
                        </Route>
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}>
                        </Route> 
                        <Route path='*' element={<Page404/>}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;