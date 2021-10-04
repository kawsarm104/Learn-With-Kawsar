 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Service/Services";

function App() {
  return (
    <div className="">
       
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
          <Services></Services>  
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
   
      
    </div>
  );
}

export default App;


// https://github.com/ProgrammingHeroWC4/review-website-kawsarm104.git