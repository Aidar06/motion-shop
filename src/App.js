import './App.css';
import './styles/style.scss'
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Routes , Route} from "react-router-dom";
import Main from "./pages/Main/main";
import Basket from "./pages/Basket/basket";
import Faq from "./pages/Faq/faq";
import AboutUs from "./pages/AboutUs/aboutUs";
import WomanClothes from "./pages/WomanClothes/womanClothes";
import ManClothes from "./pages/ManClothes/manClothes";
import ChildrenClothes from "./pages/ChildrenCLothes/childrenClothes";
import Shoe from "./pages/Shoe/shoe";





function App() {
  return (
    <>
      <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/woman' element={<WomanClothes/>}/>
            <Route path='/man' element={<ManClothes/>}/>
            <Route path='/children' element={<ChildrenClothes/>}/>
            <Route path='/shoe' element={<Shoe/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;


