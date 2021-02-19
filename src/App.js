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

  let ourStoryText = `BUILDING QUALITY HOMES AND COMMERCIAL STRUCTURES IS INCREDIBLY COMPLEX. WE HAVE A PROVEN TRACK RECORD 
  WITH AN EXPANSIVE PORTFOLIO OF PROJECTS ACROSS A VARIETY OF PRODUCT TYPES INCLUDING CUSTOM AND SPECULATIVE HOMES, 
  HOSPITALITY, COMMERCIAL, RETAIL, AND TENANT IMPROVEMENTS.`;

  let completedProjectsValue = 27;

  let gitHubURL = 'https://github.com/RostislavKalyuzhny';
  let originalDesignURL = 'https://www.figma.com/file/sUHO2mddq4ejSTDmgnx5S0/konstruct-template-(Copy)?node-id=0%3A2';

  const menuLinks = [
    {
      name: 'Home',
      href: '#'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Services',
      href: '#services'
    },
    {
      name: 'Contacts',
      href: '#contacts'
    },
  ];

  const footerLinks1 = [
    {
      name: 'Faq',
      href: '#'
    },
    {
      name: 'Terms',
      href: '#'
    },
    {
      name: 'Kareers',
      href: '#'
    },
  ];

  const footerLinks2 = [
    {
      name: 'blog',
      href: '#'
    },
    {
      name: 'Partners',
      href: '#'
    },
    {
      name: 'News',
      href: '#'
    },
  ];

  const serviceBoxes = [
    {
      img : bitmap,
      title : 'PROJECT AND CONSTRUCTION MANAGEMENT',
      text: `Construction is art and craft, but efficiently managing the project is a science. We hold ourselves to the highest 
      standard to deliver your project on time and at a level of quality that precedes our reputation.`
    },
    {
      img : bitmap2,
      title : 'STRUCTURE AUDIT AND MAINTENANCE',
      text: `Procore is a comprehensive construction software suite offering our clients on demand access to valuable 
      information regarding scheduling, milestones, budgets, change orders, finish selections, and more. `
    },
    {
      img : bitmap3,
      title : 'FACTORY CONSTRUCTION AND MODELING',
      text: `Your finished product will reflect the resources, time, and passion we bring to every project.`
    },
  ];

  const createLinks = (links) => {
    return links.map( link => <li key={ link.name }><a href={ link.href }>{ link.name }</a></li>)
  }

  const createBoxes = (boxes) => {
    return boxes.map( (box, index) => {
      return (
        <div key={index} className="box">
          <img src={ box.img } alt={ box.img } />
          <h3>{ box.title }</h3>
          <p>{ box.text }</p>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="header">

      </header>

      <nav className="nav">
        <div className="container">
          <div className="navbar">
            <img src={ logoBlack } alt="Konstruct" />

            <ul className="menu">
              { createLinks(menuLinks) }
            </ul>
          </div>
        </div>
      </nav>

      <section id="about" className="about">
        <div className="container">
          <h2>Our Story</h2>
          <div className="description">
            <div className="desc-text">
              <h3>Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management 
              firm</h3>
              <p>{ ourStoryText }</p>
              <p>Completed projects: { completedProjectsValue }</p>
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
              BUILDING QUALITY HOMES AND COMMERCIAL STRUCTURES IS INCREDIBLY COMPLEX.
            </p>
            <a href="#services">all services</a>
          </div>

          <div className="serv-boxes">
            { createBoxes(serviceBoxes) }
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
                Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Perferendis recusandae rem explicabo 
                nobis illum quae nemo.
              </p>
            </div>

            <div className="links">
              <h4>Links</h4>
              <nav className="links-menu">
                <ul>
                  { createLinks(menuLinks) }
                </ul>

                <ul>
                  { createLinks(footerLinks1) }
                </ul>

                <ul>
                  { createLinks(footerLinks2) }   
                </ul>
              </nav>
            </div>

            <div className="contacts">
              <h4>contacts</h4>
              <p>Rostislav Kalyuzhny</p>
              <a href={ gitHubURL }>My Github</a>
              <a href={ originalDesignURL }>Original design</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}

export default App;
