import React from 'react';
import MainCategory from "./MainCategory/mainCategory";
import MainHero from "./MainHero/mainHero";
import MainClothes from "./MainClothes/mainClothes";

const Main = () => {
    return (
        <div>
            <MainHero/>
          <MainCategory/>
          <MainClothes/>
        </div>
    );
};

export default Main;