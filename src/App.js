import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';

import ThreeDMap from './pages/publicSafety/components/threeDMap/index'
import OverView from './pages/overView/index'
import PublicSafety from './pages/publicSafety/index'
import PublicService from './pages/publicService/index'
import PublicManagement from './pages/publicManagement/index'
import Moniter from './pages/moniter/index'
import Header from './components/header';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={ OverView }></Route>
        <Route exact path="/safety" component={ PublicSafety }></Route>
        <Route path="/inside" component={ ThreeDMap }></Route>
        <Route path="/service" component={ PublicService }></Route>
        <Route path="/management" component={ PublicManagement }></Route>
        <Route path="/moniter" component={ Moniter }></Route>
      </div>
    );
  }
  
}

export default App;
