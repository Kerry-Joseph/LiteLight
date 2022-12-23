import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      {/* nav - search */}
      {/* nav - catagories */}
      {/* nav - deliver to/sign in - mobile only */}
      {/* nav - navigation button - bottom of screen - mobile only */}
      <Main />
      {/* main - banner image */}
      {/* main - recommendations - mobile only */ }
      {/* main - internet provider banner ad - mobile only */}
      {/* main - sale banner ad - mobile only */}
      {/* main - content block - 4 lighters per block  */}
      <Footer />
      {/* footer - back to top banner button */}
      {/* footer - company info */}
      {/* footer - logo/language/country */}
      {/* footer - tos */}
    </div>
  );
}

export default App;
