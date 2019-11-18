import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import Scroll from '../components/Scroll';

const IndexPage = ({data}) => {
  const {section1, section2, section3, section4, section5, section6} = data.dataYaml;
  return(
    <Layout>
      <Header />

      <section id="section1">
        <header>
          <h2>{section1.title}</h2>
        </header>
        <p>
          {section1.text}
        </p>
        <footer>
          <Scroll type="id" element="section2">
            <a href="#section2" className="button style2 scrolly">
              {section2.title}
            </a>
          </Scroll>
        </footer>
      </section>

      <article id="section2" className="container box style1 right">
        <a href="/#" className="image fit">
        </a>
        <div className="inner">
          <header>
            <h2>
              {section2.title}
            </h2>
          </header>
          <p>
            {section2.text}
          </p>
        </div>
      </article>

      <article className="container box style1 left">
        <a href="/#" className="image fit">
        </a>
        <div className="inner">
          <header>
            <h2>
              Mollis posuere
              <br />
              lectus lacus
            </h2>
          </header>
          <p>
            Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper.
            Etiam egestas scelerisque ac duis magna lorem ipsum dolor.
          </p>
        </div>
      </article>

      <article className="container box style2">
        <header>
          <h2>Magnis parturient</h2>
          <p>
            Justo phasellus et aenean dignissim
            <br />
            placerat cubilia purus lectus.
          </p>
        </header>

        <div className="inner gallery">
          
        </div>
      </article>

      <article className="container box style3">
        <header>
          <h2>Nisl sed ultricies</h2>
          <p>Diam dignissim lectus eu ornare volutpat orci.</p>
        </header>
        <form method="post" action="#">
          <div className="row gtr-50">
            <div className="col-6 col-12-mobile">
              <input
                type="text"
                className="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="col-6 col-12-mobile">
              <input
                type="text"
                className="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </article>

      <article className="container box style3">
        <header>
          <h2>Elements</h2>
          <p>This starter has other elements.</p>
          <br />
          Check it out
          <Link to="/Element"> here </Link>
        </header>
      </article>

      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    dataYaml(page: { eq: "index" }) {
      section1 {
        title
        text
      }
      section2 {
        title
        text
      }
      section3 {
        title
        text
      }
      section4 {
        title
        text
      }
      section5 {
        title
        text
      }
      section6 {
        title
        text
      }
    }
  }
`;

export default IndexPage;
