import React     from 'react';
import LoginForm from './Login';


const Hero = props => (
  <section className="hero is-primary body-content">
    <div className="hero-body">
      <div className="container">
        <section className="columns is-desktop">
          <article className="column">

          </article>
          <article className="column">
            <h1 className="title">Login Here</h1>
            {props.isLoggedIn ?
              <p>Logged In</p> :
              <LoginForm {...props} />
            }
          </article>
        </section>
      </div>
    </div>
  </section>
);

export default Hero;

