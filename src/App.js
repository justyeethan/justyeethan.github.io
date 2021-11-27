import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './assets/images/Resume.pdf';

export default function App() {
  useEffect(() => {
    document.title = "Ethan Yee's Portfolio"
 }, []);
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            {() => { window.open(Resume); }}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
