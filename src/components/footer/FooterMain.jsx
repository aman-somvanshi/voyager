// App.jsx
//import logo from './logo.svg';
import './FooterMain.css';
import Footer from './Footer.jsx';
import PreFooter from './PreFooter.jsx';

function FooterMain() {
  return (
    <div className="App">
      <PreFooter />
      <Footer />
    </div>
  );
}

export default FooterMain;