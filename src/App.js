import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Video from './components/Video'
import Contact from './components/Contact'
import Page404 from './components/Page404'
import './App.css';


const App = () => {

  return (
    <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/"><Video/></Route>
        <Route exact path="/contacts"><Contact/></Route>
        <Route component={Page404} />
        </Switch>
        <Footer/>
    </div>
  )

}

export default App;
