import main from './images/main.png';
import hero from './images/hero.gif';
import twitter from './images/twitter.png';
import telegram from './images/telegram.png';
// import bee from './images/bee.png';
import bee1 from './images/MAD BEE 1.png';
import btn1 from './images/btn1.png';
import about from './images/about.png';
import about_bg from './images/about bg.png';
// import join from './images/join.png';
// import forces1 from './images/join forces 1.png';
import token1 from './images/tokenomics 1.png';
import taxbox from './images/tax box.png';
import token from './images/tokenomics.png';
import map1 from './images/roadmap 1.png';
import group from './images/Group.png';
import gif1 from './images/1.gif';
// import gif2 from './images/2.gif';
import gif3 from './images/3.gif';
import gif4 from './images/main.gif';
import gif5 from './images/5.gif';
// import map_bee1 from './images/map-bee1.png';
// import map_bee2 from './images/map-bee2.png';
// import token_img from './images/token-img.png';
// import tweet from './images/TWEETS.png';
// import tweet1 from './images/tweet.png';
// import tweet2 from './images/tweet1.png';
import meme from './images/meme.png'
import meme_bg from './images/meme-bg.png'
import about_left from './images/about-left.gif'
import about_right from './images/about-right.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="hero-section" id="home">
        <header className="header">
          <nav className="navbar">
            <div className="left-side-menu">
              <a href="#home">
                <img src={main} alt="logo" />
                BEE PEPE
              </a>
            </div>
            <div className="centr-menu">
              {/* <a href="#">
                          <img src="assets/images/facebook.png" alt="facebook">
                      </a> */}
              <a href="/" className="btn">
                <img src={btn1} alt="btn" />
                <li>Buy Now</li>
              </a>
              <a className='links' href="/" target="_blank">
                <img src={twitter} alt="twitter" />
              </a>
              <a className='links' href="/" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
            <div className="navbar-toggle">
              <span />
              <span />
              <span />
            </div>
          </nav>
        </header>
        <img className="madbee" src={bee1} alt="logo" />
        <p>Unleash the Meme Magic with Bee Pepe: Where <br/> Memes Meet Money</p>
        {/* <a href="/" className="btn">
          <img src={btn1} alt="btn" />
          <li>Buy Now</li>
        </a> */}
        <img className="main" src={hero} alt="logo" />
        {/* <img className="bee-image" src={bee} alt="logo" /> */}
      </section>
      <div className="about" id="about">
        <img className='gif1' src={gif1} alt='logo' />
        <img className="heading" src={about} alt="logo" />
        <div className="content">
          <p>
            Hey there, fellow memelords and investors! Welcome to Bee Wif Hat, the wildest ride in the Memecoin universe. We're here to make you laugh, and oh boy, make you rich too!
          </p>
          <p>
            Why choose boring old investments when you can join the Bee Wif Hat revolution? 
          </p>
          <img className="about-bg" src={about_bg} alt="logo" />
          <img className="about-left" src={about_left} alt="logo" />
          <img className="about-right" src={about_right} alt="logo" />
          <a href="/" className="btn">
            <img src={btn1} alt="btn" />
            <li>JOIN TELEGRAM</li>
          </a>
        </div>
        {/* <div className="row">
          <div className="box">
            <img src="assets/images/box1.png" alt="logo" />
            <h2>Memes + Money = Magic</h2>
            <p>
              We've cracked the code, folks! Mad Bee combines the power of memes and
              honey to create pure magic. Join the hottest memes and watch your
              tokens go from "meh" to "yeah!"
            </p>
          </div>
          <div className="box">
            <img src="assets/images/box2.png" alt="logo" />
            <h2>Community of Champions</h2>
            <p>
              At Mad Bee, it's all about the fam. Our community is packed with
              memeing experts, financial wizards, and passionate crypto enthusiasts
              hyped up on memes. Join the party, share epic memes, and become part
              of a movement that will make you say, "This is where I belong!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src="assets/images/box3.png" alt="logo" />
            <h2>Haters Gonna Hate, Zap Gonna Zap</h2>
            <p>
              We're not here to play nice, we're here to dominate. With our verified
              smart contracts and liquidity locked, we're ready to mad away any
              doubts or worries.
            </p>
          </div>
          <div className="box">
            <img src="assets/images/box2.png" alt="logo" />
            <h2>Moonshot Profits</h2>
            <p>
              Howl at the moon with joy because Mad Bee’s got your back. Our team of
              memeologists scours the internet depths for the next big thing, the
              "can't-stop-sharing" meme! Get ready to ride the wave of viral
              sensations and make it rain!
            </p>
          </div>
        </div>
        <p className="claim">
          Disclaimer: Memecoin investing is a wild and exciting adventure, but it
          carries risks. Always do your research, consult with financial wizards,
          and only invest what you're willing to lose. Stay meme-savvy and ride the
          meme wave with caution. Mad Bee takes no responsibility for excessive
          meme-induced laughter, any losses or unexpected riches. Let the memes be
          with you!
        </p> */}
      </div>
      {/* <div className="join" id="join">
        <div className="left">
          <img src={join} alt="logo" />
        </div>
          <img className="mene" src={gif2} alt="logo" />
        <div className="right">
          <img className="img" src={forces1} alt="logo" />
          <p>
          Hey there, fellow memelords and investors! Welcome to Bee Pepe, the wildest ride in the Memecoin universe. We're here to make you laugh, and oh boy, make you rich too!
          </p>
          <p>Why choose boring old investments when you can join the Bee Pepe revolution? Here's why we'll have you saying "Wow, much gains, such fun"</p>
          <a href="/" className="btn">
            <img src={btn1} alt="btn" />
            <li>JOIN TELEGRAM</li>
          </a>
        </div>
      </div> */}
      {/* <section className='tweets'>
        <img className="heading" src={tweet} alt="logo" />
        <img className="gif3" src={gif3} alt="logo" />
        <div className='content'>
          <img src={tweet1} alt="logo" />
          <img src={tweet2} alt="logo" />
        </div>
        
      </section> */}
      <section className='meme' id='meme'>
      <img className="gif3" src={gif3} alt="logo" />
        <img src={meme} alt='logo' />
        <img src={meme_bg} alt='logo' className='bg' />
      </section>
      <section className="tokenomics" id="token">
      <img className="gif4" src={gif4} alt="logo" />
      {/* <img className="token-img" src={token_img} alt="logo" /> */}
        <div className="left">
          <img className="img" src={token1} alt="logo" />
          <h3>420 690 000 000 - Total Supply</h3>
          <a href="/" className="btn">
            <img src={taxbox} alt="tax" />
            <li>0% TAX</li>
          </a>
          <ul>
            <li>LIQUIDITY BURNED</li>
            <li>CONTRACT RENOUNCED</li>
          </ul>
        </div>
        <div className="right">
          <img src={token} alt="tokenomics" />
        </div>
      </section>
      <div className="map" id="map">
        <img className="img" src={map1} alt="logo" />
        <img className="gif5" src={gif5} alt="logo" />
        {/* <img className="map_bee1" src={map_bee1} alt="logo" /> */}
        {/* <img className="map_bee2" src={map_bee2} alt="logo" /> */}
        <p>Welcome to the Memecoin Roadmap of Epicness!</p>
        <div className="row">
          <div className="left">
            <img src={group} alt="logo" />
            <h3>PHASE I 🚀</h3>
            <ul>
              <li>
                {" "}
                Launch on ERC20
              </li>
              <li>
                {" "}
                Community Growth
              </li>
              <li>
              Website Release
              </li>
            </ul>
          </div>
          <div className="left">
            <img src={group} alt="logo" />
            <h3>PHASE II 🌐</h3>
            <ul>
              <li>
                {" "}
                CMC & CG Listing
              </li>
              <li>
                {" "}
                Further Social Media Marketing
              </li>
              <li>
                {" "}
                Medium Release
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <img src={group} alt="logo" />
            <h3>PHASE III 💰</h3>
            <ul>
              <li>
              Telegram & Twitter Marketing
              </li>
              <li>
              Custom Meme's
              </li>
              <li>
              Cameo's
              </li>
            </ul>
          </div>
          <div className="left">
            <img src={group} alt="logo" />
            <h3>PHASE IV 🌍</h3>
            <ul>
              <li>
                {" "}
                CEX Listings
              </li>
              <li>
              Partnerships
              </li>
              <li>
              Going Viral
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="claim">
        *Disclaimer: This roadmap is a memetic creation designed purely for the purpose of humor and entertainment. While we strive to make dreams come true, actual results may vary. Remember, invest responsibly, stay meme-savvy, and don't forget to laugh along the way!
        </div> */}
      </div>
      <div className="wrapper">
        <footer className="footer">
          <header className="header">
            <nav className="navbar">
              <div className="left-side-menu">
                <a href="#home" className="home internal-links">
                  <img src={main} alt="logo" />
                  BEE PEPE
                </a>
              </div>
              <div className="center-menu">
                <a href="#about" className="tg hm1 internal-links">
                  <li>ABOUT</li>
                </a>
                <a href="#meme" className="tg hm2 internal-links">
                  <li>Memes</li>
                </a>
                <a href="#token" className="tg hm2 internal-links">
                  <li>Tokenomics</li>
                </a>
                <a href="#map" className="tg hm3 internal-links">
                  <li>ROADMAP</li>
                </a>
                <div className="right-side-menu">
                  {/* <a href="#" class="link internal-links">
                                  <img src="assets/images/facebook.png" alt="facebook">
                              </a> */}
                  <a
                    href="/"
                    target="_blank"
                    className="link"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="link"
                  >
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
              </div>
              <div className="navbar-toggle">
                <span />
                <span />
                <span />
              </div>
            </nav>
          </header>
        </footer>
        <section className="rights">
          <p>©2024 Bee Pepe. All rights reserved.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
