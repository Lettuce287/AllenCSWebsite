import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
  return (
    <>
        <section id="main-section">
          <div id="welcome-info">
            <h1 id="title">Welcome to Allen CS</h1>
            <br/>
            <hr></hr>
            <p>
              We are made up of several forums such as the Computer Science
              Honor Society and OC3. Our forum meetings are on Wednesdays at 4:30, with the exception of the first of each month for CSHS. After school peer tutoring is also avaliable on Tuesdays and Thursdays at 7 PM via Google Meet.
            </p>
          </div>
          <div id="links">
            <div class="link-holder">
              <h3 class="mini-header">Social Links:</h3>
              <ul class="sociallist">
                <li>
                  <a href="https://www.github.com/AllenCSForum">
                    <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></img>
                  </a>
                </li>
                <li>
                  <a href="https://allencs.org/discord">
                    <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png"></img>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/allencompsci">
                    <img id="twitter" src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/allencomputerscience">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"></img>
                  </a>
                </li>
              </ul>
            </div>
            <div class="link-holder">
              <h3 class="mini-header">Remind Codes:</h3>
              <ul class="remindlist">
                <li><b>CSHS:</b> @ahs-cshs</li>
                <li><b>Cybersecurity:</b> @ahs-cybsec</li>
                <li><b>UIL:</b> @ahs-csuil</li>
                <li><b>OC3:</b> @ahs-oc3</li>
                <li><b>Girls Who Code:</b> @ahs-csgwc</li>
              </ul>
            </div>
          </div>
        </section>
    </>
  );
};

export default App;
