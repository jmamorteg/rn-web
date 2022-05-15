import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, section } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div className="tempHome" 
             style={{background-color:black;}}>
          <img className="logo" 
               style={
                 position: absolute;
                 width: 50%;
                 left: calc(50% - 509px/2 + 0.5px);
                 top: 257px;
                 } 
               src="./public/img/RN_logo.svg" />
          <p className="underConst"
             style={

             }>EN CONSTRUCCIÓN</p>
          <p className="contact"
             style={
               
             }>para más información contactar al +34 654 10 77 98</p>
        </div>
        <article className="article"
                 style={visibility:hidden;}>
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