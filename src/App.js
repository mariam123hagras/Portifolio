import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './components/Main';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div >
        <Main />
        <Skills />
        <Projects />
        <Connect />
      
      </div>
  <Footer />
    </div>
  );
}

export default App;