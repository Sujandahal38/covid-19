import React, { useState, useEffect } from 'react';
import './App.css';
import SocialBar from './components/topBar/socialBar';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import WorldInfo from './pages/worldInfo';
import Footer from './components/footer/footer';
import DrawerMenu from './components/drawer/drawerMenu';
import News from './components/cards/News';
import NepalInfo from './pages/nepalInfo';
import ToTop from './components/floatingButton/ToTop';

function App(props) {
  document.title = 'कोरोना संक्र्मण तथ्यांक';
  const closeDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      setDrawer(false);
    }
    setDrawer(false);
  };
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => {
    setDrawer(true);
  };

  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleScroll = () => {

      if (window.pageYOffset > 1200) {
        setShowButton(true);
      }
      if (window.pageYOffset < 1200) {
        setShowButton(false);
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <SocialBar />
        <Header openDrawer={openDrawer} />
        <DrawerMenu drawer={drawer} closeDrawer={closeDrawer} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/worldinfo" component={WorldInfo} />
          <Route path="/nepalinfo" component={NepalInfo} />
          <Route path="/news">
            <News hideHeader={true} newsLength={100} />
          </Route>
        </Switch>
        <Footer />
        <ToTop showButton={showButton} scrollTop={scrollTop} />
      </Router>
    </div>
  );
}

export default App;
