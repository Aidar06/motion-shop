import './App.css';
import './styles/style.scss'
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main/main";
import Basket from "./pages/Basket/basket";
import Faq from "./pages/Faq/faq";
import AboutUs from "./pages/AboutUs/aboutUs";
import WomanClothes from "./pages/WomanClothes/womanClothes";
import ManClothes from "./pages/ManClothes/manClothes";
import ChildrenClothes from "./pages/ChildrenCLothes/childrenClothes";
import Shoe from "./pages/Shoe/shoe";
import AddBasket from "./pages/AddBasket/addBasket";
import Search from "./components/modalSearch/search";
import BurgerMenu from "./components/BurgerMenu/burgerMenu";
import Searcher from "./pages/Searcher/searcher";
import MobileBasket from "./pages/MobileBakset/mobileBasket";


function App() {
    return (
        <>
            <Header/>
            <Search/>
            <BurgerMenu/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/aboutUs' element={<AboutUs/>}/>
                <Route path='/woman' element={<WomanClothes/>}/>
                <Route path='/man' element={<ManClothes/>}/>
                <Route path='/children' element={<ChildrenClothes/>}/>
                <Route path='/shoe' element={<Shoe/>}/>
                <Route path='/addBasket/:id' element={<AddBasket/>}/>
                <Route path='/searcher' element={<Searcher/>}/>
                <Route path='/mobBasket' element={<MobileBasket/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;


