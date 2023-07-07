//import { Switch, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

//INFO: old HEAD & App 
/* 
import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section'
import FeaturedCollection from './components/featured-collection/featured-collection';
import Footer from './components/footer/footer';
*/
/* 
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
      <Footer />
    </div>
  );
}
*/
