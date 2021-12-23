import "../css/brand.css";
import "../css/about.css";

import React from "react";

function App() {
  return (
    <div className="hide-overflow-x">
      <section
        id="splash"
        className="section section--splash"
        aria-label="Health for Life Splash Image"
      >
        <img className="img--hfl" src="/logo.svg" />
        <img
          className="img--box-shadow img--splash"
          alt="silhouettes of children jumping against a sunset background"
          src="/splash.jpg"
        />
      </section>
      <section id="ceo-message" className="section section--ceo-message">
        <img
          className="img--border img--round img--ceo"
          alt="photo of Health for Life CEO"
          src="/ceo.png"
        />
        <div className="section__quotation section__text--md">
          Here at Health for Life, we care about both your health&nbsp;
          <span className="section__text--emphasis">and</span> your life.
          <p className="section__quotation--attribution">
            - Sandra Williams, CEO
          </p>
        </div>
      </section>
      <section id="network-stats" className="section section--contrast">
        <h2>Our Network</h2>
        <div className="section__container--stats">
          <p>
            <span className="section__text--xl">120</span> doctors
          </p>
          <p>
            <span className="section__text--xl">3</span> campuses
          </p>
          <p>
            over <span className="section__text--xl">120,000</span> patients
          </p>
        </div>
      </section>
      <section id="testimonials" className="section">
        <h2>Testimonials</h2>
        <div className="section__container--testimonials">
          <div className="section__divider" role="hidden" />
          <div className="section__quotation section__quotation--testimonial">
            I appreciate the concern for my life, in addition to my health.
          </div>
          <div className="section__divider" aria-hidden="true" />
          <div className="section__quotation section__quotation--testimonial">
            Undoubtedly one of the top 50 healthcare networks I&apos;ve ever
            used!
          </div>
          <div className="section__divider" aria-hidden="true" />
          <div className="section__quotation section__quotation--testimonial">
            I have never once cried while visiting any of my doctors.
          </div>
          <div className="section__divider" aria-hidden="true" />
        </div>
      </section>
      <section id="join-us" className="section section--join">
        <h2>Join Us!</h2>
        <div className="section__container--join">
          <div className="form__input">
            <label className="form__label" htmlFor="email">
              Email
              <br />
              <input id="email" name="email" />
            </label>
          </div>
          <div className="form__input">
            <label className="form__label" htmlFor="full-name">
              Full Name
              <br />
              <input id="full-name" name="full name" />
            </label>
          </div>
          <label className="form__label"></label>
          <div className="form__input">
            Region
            <br />
            <select id="region" name="region">
              <option>Africa</option>
              <option>Asia</option>
              <option>Australia</option>
              <option>Europe</option>
              <option>North America</option>
              <option>South America</option>
            </select>
          </div>
        </div>
        <button type="submit" className="button">
          Sign Up for Mailing List
        </button>
      </section>
    </div>
  );
}

export default App;
