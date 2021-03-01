import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/_landingPage.scss';
import Header from './Header';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className="page-landing">
      <Header />
      <main className="main central-column">
        <div className="transparent-container">
          <h1 className="main__title"> Crea tu tarjeta de visita</h1>

          <h2 className="main__subtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </h2>

          <article className="article">
            <ol className="article__list">
              <li className="article__list--item">
                Diseña
                <i
                  className="article__list--icon fa fa-object-ungroup"
                  aria-hidden="true"
                ></i>{' '}
              </li>
              <li className="article__list--item">
                Rellena{' '}
                <i
                  className="article__list--icon fa fa-keyboard-o"
                  aria-hidden="true"
                ></i>
              </li>
              <li className="article__list--item">
                Comparte
                <i
                  className="article__list--icon  fa fa-share-alt"
                  aria-hidden="true"
                ></i>
              </li>
            </ol>
          </article>
        </div>

        <div className="main__button">
          <Link to="/card-generator" className="main__button--link">
            Comenzar
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
