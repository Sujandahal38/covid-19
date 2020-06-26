import React, { useState } from 'react';
import './App.css';
import SocialBar from './components/topBar/socialBar';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import WorldInfo from "./pages/worldInfo";
import Footer from './components/footer/footer';
import DrawerMenu from './components/drawer/drawerMenu';
import News from './components/cards/News';
import NepalInfo from './pages/nepalInfo';
import ToTop from './components/floatingButton/ToTop';


function App(props) {
  document.title = 'कोरोना संक्र्मण तथ्यांक'
  const closeDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
     setDrawer(false);
    }
   setDrawer(false);
  }
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => {
    setDrawer(true);
  }


  return (
    <div className="App">


    <Router>
    <SocialBar/>
    <Header openDrawer={openDrawer} />
      <DrawerMenu drawer={drawer} closeDrawer={closeDrawer}/>
        <Switch>
        <Route exact path='/' render={props => <HomePage/> } />
        <Route path ='/worldinfo' render={ props => <WorldInfo/> } />
        <Route  path= '/nepalinfo' render={props => <NepalInfo/>} />
        <Route path='/news' render={props => <News hideHeader={true} newsLength={100} />} />
        </Switch>
        <Footer/>
        <ToTop/>
    </Router>


    </div>
  );
}

export default App;
