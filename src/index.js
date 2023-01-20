import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const currentEvents = [
  {
    title: "example 1",
    date: "1/2/03",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "example 2",
    date: "4/5/06",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

//messy code go brr

root.render(
  <StrictMode>
    
    <div class="navbar">
        <ul>
          <li>
            <a href="https://life.allencs.org/">STEAM Life</a>
          </li>
          <li>
            <a href="https://steam-careers.allencs.org/">Careers in STEAM</a>
          </li>
          <li>
            <a href="https://steam-tour.allencs.org/">Virtual Tour</a>
          </li>
        </ul>
        <img
          class="headimg"
          src="https://www.allenisd.org/cms/lib/TX01001197/Centricity/Template/GlobalAssets/images///logos/allen%20isd%20masthead%20small%20test.png"
        ></img>
        <h2 class="navtext">ALLEN COMPUTER SCIENCE</h2>
        <h3 class="navsubtext">Home to Allen's CS Clubs!</h3>
    </div>

    <section id="container">

      <App />
      
        <section id="events-section">
          <h1 class="header">Current Events</h1>
          {
            currentEvents.map(event => (
              <div class="event">
                <h3 class="miniheader">{event.date}</h3>
                <h2 class="subheader">{event.title}</h2>
              </div>
            ))
          }
        </section>
      </section>
  </StrictMode>
);