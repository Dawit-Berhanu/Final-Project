
import Header from './components/Header';
import CarouselHome from './components/CarouselHome'
import Sectors from './components/Sectors';
import Add from './components/Add';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Natural_resource from './components/Sector/Natural_resource';

function App() {
  return (
    <Router>
      <div className ="app">
        <Header/> 
        <div className="content">
          <Switch>
            <Route exact path="/App">
              <CarouselHome/>
              <Sectors/>
            </Route>
            <Route  path="/Add">
             <Add/>
            </Route>
            <Route path="/Sectors">
              <Sectors/>
            </Route>
            <Route path="/Natural_resource">
              <Natural_resource/>
            </Route>
          </Switch>
        </div>
     </div>
    </Router>
  );
}

export default App;
