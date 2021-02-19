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

  const testButtonStyle = {
    margin: 10 + 'px', 
    padding: 10 + 'px',
  }

  const ourStoryText = `BUILDING QUALITY HOMES AND COMMERCIAL STRUCTURES IS INCREDIBLY COMPLEX. WE HAVE A PROVEN TRACK RECORD 
  WITH AN EXPANSIVE PORTFOLIO OF PROJECTS ACROSS A letIETY OF PRODUCT TYPES INCLUDING CUSTOM AND SPECULATIVE HOMES, 
  HOSPITALITY, COMMERCIAL, RETAIL, AND TENANT IMPROVEMENTS.`;

  let completedProjectsValue = 67;

  let isNewsletterSignup = true;

  const gitHubURL = 'https://github.com/RostislavKalyuzhny';
  const originalDesignURL = 'https://www.figma.com/file/sUHO2mddq4ejSTDmgnx5S0/konstruct-template-(Copy)?node-id=0%3A2';

  const companyEvents = [
    ['2012', 'First foreign project completed'],
    ['2008', 'Foundation of the company'],
    ['2010', 'Attraction of additional investments in connection with the expansion of the company'],
    ['2014', 'The number of employees in the company reaches 300 people'],  
    ['2020', 'Opening offices in other countries: Denmark, France, Germany'],
    ['2018', 'Creation of an additional office. Anniversary in 50 completed projects and ten years of the company'],
  ];

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

  const defaultSort = (array) => {
    return array.sort();
  }

  function bubbleSort(a){
    var n = a.length;

    for (var i = 0; i < n-1; i++){ 
      for (var j = 0; j < n-1-i; j++){ 
        if (+a[j+1][0] < +a[j][0]){  // подстроил проверку под свой масив(companyEvents)  
          var t = a[j+1]; a[j+1] = a[j]; a[j] = t; 
        }
      }
    }                     
   return a;
  };

  const addElemToArray = (elem, array) => {
    array.push(elem);
    console.log(array);
  }

  const deleteLastElemWithArray = (array) => {
    array.pop();
    console.log(array);
  }

  const createLinesInTable = (lines) => {
    return lines.map( (line, index) => <tr key={ index }><td>{ line[0] }</td><td>{ line[1] }</td></tr>);
  }

  const createLinks = (links) => {
    return links.map( link => <li key={ link.name }><a href={ link.href }>{ link.name }</a></li>);
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

  console.log(companyEvents);

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
              <h3>Founded in 2008 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management 
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

          <table>
            <thead>
              <tr><th>Year</th><th>Event</th></tr>
            </thead>  

            <tbody>
              { createLinesInTable(companyEvents) }
            </tbody>  
          </table>

          <button 
            style={ testButtonStyle }
            onClick={ () => console.log(defaultSort(companyEvents)) }>
            Сортировать по годам - sort()
          </button>

          <button 
            style={ testButtonStyle  }
            onClick={ () => console.log(bubbleSort(companyEvents)) }>
            Сортировать по годам - bubbleSort()
          </button>

          <button 
            style={ testButtonStyle  }
            onClick={ () => addElemToArray(['year', 'event'], companyEvents)}>
            Добавить елемент
          </button>

          <button 
            style={ testButtonStyle  }
            onClick={ () => deleteLastElemWithArray(companyEvents)}>
            Удалить елемент
          </button>
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

      { 
        isNewsletterSignup &&
        <section className="newslatter">
          <div className="container">
            <form className="newslatter-form">
              <h2>Newsletter Signup</h2>
              <input type="text" placeholder="test@youremail.com" />
              <button type="submit">Signup</button>
            </form>
          </div>
        </section>
      }

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
