import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import Contact from "./components/about";
import Characters from "./components/Characters";
import Home from "./components/home";
import Error from "./components/Error";
import DatabaseProvider from "./context/database"
import Quiet from "./components/cardpages/Quiet"
import Depth from "./components/depth"
import Gallery from "./components/gallery/Gallery"
import SimpleReactLightbox from 'simple-react-lightbox'
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/about';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <DatabaseProvider>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home/:langId" component={Home} exact />
                <Route path="/about/:langId" component={About} />
                <Route path="/characters/:langId" component={Characters} exact/>
                <Route path="/characters/:langId/:Id" component={Quiet}/>
                <Route path="/depth/:langId" component={Depth} />
                <SimpleReactLightbox>
                  <Route path="/gallery/:langId/" component={Gallery} />
                </SimpleReactLightbox>
                <Route component= {Error}/>
              </Switch>
        </DatabaseProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
