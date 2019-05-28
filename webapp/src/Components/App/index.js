import React from 'react';
import './App.css';
import styles from './App.css';
import Banner from '../../Views/Banner';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InfoView from '../../Views/InfoView';
import HomeView from '../../Views/HomeView';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Banner />
        <header className={styles.AppHeader}>


        </header>
        <HomeView />
        <Route exact path="/" component={HomeView} />
        <Route path="/info" component={InfoView} />

      </div>
    </Router>
  );
}

export default App;
