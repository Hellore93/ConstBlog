import React, { useState} from 'react'
// import ConstructionSection from './components/ConstructionSection';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import { InfoDataM1, InfoDataOne, InfoDataTwo } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles.js';
import { Switch } from 'react-router';
// import ConstructionsMain from './data/ConstructionData.js';
import Route from "react-router-dom/Route";
import {BrowserRouter as Router} from "react-router-dom/Router";
import MaterialsMain from './data/MaterialsData.js';
import ContactUs from './data/ContactUs.js';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
       
      <Switch>   
        <Route path="/home">
          <Hero slides={SliderData} />   
        </Route>
        <Route path="/konstrukcje">
          {/* <ConstructionsMain />   */}
          <InfoSection {...InfoDataOne} />
          <InfoSection {...InfoDataTwo} />  
        </Route>  
        <Route path="/materialy">
          <MaterialsMain/>
          <InfoSection {...InfoDataM1} />
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>  

    </>
  );
}

export default App;
