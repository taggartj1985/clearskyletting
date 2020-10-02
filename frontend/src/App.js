import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import PropertyScreen from './screens/PropertyScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open")
  }

  return (
<BrowserRouter>
    <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/" > ClearSky Letting</Link>
          </div>
          <div className="header-links">
            <a href="fav.html">Favourites</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Listings</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">For Sale</a>
            </li>

            <li>
              <a href="index.html">For Let</a>
            </li>

          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/property/:id" component={PropertyScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>

        </main>
        <footer className="footer">
          John Taggart
        </footer>
      </div>
</BrowserRouter>

  );
}

export default App;
