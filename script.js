function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Mhuhammad Ali 


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PROFLE")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Muhammad", /*#__PURE__*/

    React.createElement("strong", null, "Ali")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I do"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "technology"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " code.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "My PROFILE"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Muhammad."), /*#__PURE__*/
    React.createElement("p", null, "I am a web developer and designer In kurdistan"), /*#__PURE__*/



    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better")), /*#__PURE__*/





    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does he do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their")), /*#__PURE__*/







    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a designer."), /*#__PURE__*/
    React.createElement("p", null), /*#__PURE__*/


    React.createElement("p", null, "User interfaces, brochures, books, branding... You name it! As I mentioned, creating pretty things is particularly important for me."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on lately. All of these were built during my coding camp adventure on",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "#", target: "_blank", rel: "noopener noreferrer" }), ", where I've been coding for almost 7 months non-stop until I completed all the projects required to get my Full-Stack Developer certification.")), /*#__PURE__*/






    React.createElement("div", { className: "none" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "none",
      img: 'https://previews.123rf.com/images/belchonoksun/belchonoksun1309/belchonoksun130900009/22350137-beautiful-technical-seamless-pattern-with-programming-code.jpg',
      tech: "js css react node",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null), /*#__PURE__*/


    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none.",
      img: '#',
      tech: "js node css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null), /*#__PURE__*/


    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none",
      img: 'image',
      tech: "js node css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none.",
      img: 'imag',
      tech: "js node css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js node css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js node css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/




    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js vue node css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js d3 css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js d3 css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js d3 css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js vue css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js react css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none.",
      img: 'image',
      tech: "js react css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none",
      img: 'imag',
      tech: "js react css",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none",
      img: 'imag',
      tech: "js vue sass",
      link: "#" }, /*#__PURE__*/


    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none.",
      img: 'imag',
      tech: "js vue css",
      link: "#" }, /*#__PURE__*/


    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null, " ")), /*#__PURE__*/

    React.createElement(Project, {
      title: "none.",
      img: '#',
      tech: "js sass",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "), /*#__PURE__*/
    React.createElement("p", null)), /*#__PURE__*/



    React.createElement(Project, {
      title: "none",
      img: 'imag',
      tech: "js sass",
      link: "#",
      repo: "#" }, /*#__PURE__*/

    React.createElement("small", null, " "))))));






};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "web", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "Mhammad", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Mhammad Ali."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));