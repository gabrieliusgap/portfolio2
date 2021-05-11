
import './App.css';
import Tools from "./Components/Tools";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import StartPage from "./Components/StartPage";
import Contacts from "./Components/Contacts";
import Safety from "./Components/Safety";

import {BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom"

function App() {
  return (
      <Router>
          <div className="backGround"></div>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path="/">

                      <StartPage/>
                  </Route>
                  <Route path="/portfolio">

                      <StartPage/>
                  </Route>
                  <Route path="/about">

                      <About/>
                  </Route>
                  <Route path="/tools">

                      <Tools/>
                  </Route>
                  <Route path="/projects">

                      <Projects/>
                  </Route>
                  <Route path="/contacts">

                      <Contacts/>
                  </Route>
                  <Route path="/safety">

                      <Safety/>
                  </Route>

              </Switch>
              <Footer/>
          </div>

      </Router>
  );
}

export default App;
