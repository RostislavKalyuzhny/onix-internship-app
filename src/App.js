import logoBlack from './img/projeco-logo-black.png';
import logoWhite from './img/projeco-logo-white.png';
import plan from './img/plan.jpg';
import manage from './img/manage.jpg';
import deliver from './img/deliver.jpg';

import bitmap from './img/icons/Bitmap.svg';
import bitmap2 from './img/icons/Bitmap-2.svg';
import bitmap3 from './img/icons/Bitmap-3.svg';

import './App.css';

function App() {
return (
  <div className="App">
    <header className="header">

    </header>

    <nav className="nav">
      <div className="container">
        <div className="navbar">
          <img src={ logoBlack } alt="Konstruct" />

          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="about" className="about">
      <div className="container">
        <h2>Our Story</h2>
        <div className="description">
          <div className="desc-text">
            <h3>Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management firm</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>

          <div className="desc-photo">
            <img src={ plan } alt="Plan" />
            <img src={ manage } alt="Manage" />
            <img src={ deliver } alt="Build" />
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="services">
      <div className="container">
        <div className="serv-head">
          <h2>OUR CAPABILITIES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolore in nihil doloribus necessitatibus, iusto labore sint.
          </p>
          <a href="#">all services</a>
        </div>

        <div className="serv-boxes">
          <div className="box">
            <img src={ bitmap } alt="" />
            <h3>PROJECT AND CONSTRUCTION MANAGEMENT</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur nisi quibusdam repudiandae sequi aut quo nemo itaque, temporibus rem a velit dolores, consequatur, voluptas, praesentium! Aspernatur necessitatibus, hic numquam.  
            </p>
          </div>

          <div className="box">
            <img src={ bitmap2 } alt="" />
            <h3>STRUCTURE AUDIT AND MAINTENANCE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur nisi quibusdam repudiandae sequi aut quo nemo itaque, temporibus rem a velit dolores, consequatur, voluptas, praesentium! Aspernatur necessitatibus, hic numquam.  
            </p>
          </div>

          <div className="box">
            <img src={ bitmap3 } alt="" />
            <h3>FACTORY CONSTRUCTION AND MODELING</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur nisi quibusdam repudiandae sequi aut quo nemo itaque, temporibus rem a velit dolores, consequatur, voluptas, praesentium! Aspernatur necessitatibus, hic numquam.  
            </p>
          </div>
        </div>            
      </div>
    </section>

    <section className="newslatter">
      <div className="container">
        <form className="newslatter-form">
          <h2>Newsletter Signup</h2>
          <input type="text" placeholder="test@youremail.com" />
          <button type="submit">Signup</button>
        </form>
      </div>
    </section>

    <footer id="contacts" className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="company">
            <h4>COMPANY</h4>
            <img src={ logoWhite } alt="Konstruct" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Perferendis recusandae rem explicabo nobis illum quae nemo.
            </p>
          </div>

          <div className="links">
            <h4>Links</h4>
            <nav className="links-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contacts">Contacts</a></li>
              </ul>

              <ul>
                <li><a href="#">faq</a></li>
                <li><a href="#">terms</a></li>
                <li><a href="#">kareers</a></li>
              </ul>

              <ul>
                <li><a href="#">blog</a></li>   
                <li><a href="#">partners</a></li>   
                <li><a href="#">news</a></li>       
              </ul>
            </nav>
          </div>

          <div className="contacts">
            <h4>contacts</h4>
            <p>Rostislav Kalyuzhny</p>
            <a href="https://github.com/RostislavKalyuzhny">My Github</a>
            <a href="https://www.figma.com/file/sUHO2mddq4ejSTDmgnx5S0/konstruct-template-(Copy)?node-id=0%3A2">Original design</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
