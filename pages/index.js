import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import './styles.css';

export default class Home extends Component {
  render() {
    let { title, section } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div className="tempHome">
          <img className="logo" src="../../img/RN_logo.svg" width="50%" />
          <p className="underConst">EN CONSTRUCCIÓN</p>
          <p className="contact">para más información contactar al +34 654 10 77 98</p>
        </div>
        <article className="article">
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {section.map((section, k) => (
              <li key={k}>
                <h2>{section.name}</h2>
                <p>{section.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}