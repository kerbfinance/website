import logo from './components/Kerb_Logo.png';
import './App.css';
import whiteArrow from './components/arrows/Monochromewhite.png';
import blackArrow from './components/arrows/Monochromeblack.png';
import curvelineeffect from './components/curvelineeffect.png';
import downleftblureffect from './components/downleftblureffect.png';

function App() {
  return (
    <div className="app">

<img src={curvelineeffect} className="curveLineEffect"/>
{/* <img src={downleftblureffect} className="downleftblureffect"/>  */}

<div className="downleftblureffect"></div>
<div className="leftmiddleblureffect"></div>
<div className="rightupblureffect"></div>

        <div className="upper">
            <img src={logo} className="logo" />
            <div className="title">Kerb finance</div>
        </div>
        
        <div className="lower">
            <div className="slogan">
              <div className="sloganUpper">Trade Real World Assets</div>
              <div className="sloganLower">Permissionlessly</div>
              <div className="info">A decentralized exchange for orderbook trading of <span className="brown"> stocks, metals </span> and <span className="brown"> bonds.</span> 
              <div></div>Equipped with a DAO as the <span className="brown"> regulatory body. </span></div>

              </div>
            <div className="buttons">
             <a href='https://docsend.com/view/e28hr5de8qg2yqpi' target="_blank"><button className="buttonCommon buttonWhite" ><img src={blackArrow} className="blackArrow"/>Whitepaper</button></a>
            <a href='https://linktr.ee/kerbfinance' target="_blank"><button className="buttonCommon buttonBrown"><img src={whiteArrow} className="whiteArrow"/>Socials</button></a>
            </div>
        </div>

        

    </div>
  );
}

export default App;


            