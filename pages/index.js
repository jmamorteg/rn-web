import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, section } = attributes;
    return (
      <>
        <div style={{
          position: "relative",
          backgroundColor: "#fffdfa",
          width: "100%",
          height: "100vh"
        }}>
          <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Maitree:wght@200&display=swap" rel="stylesheet" /> 
            <link rel="stylesheet" href="https://use.typekit.net/ssl2wkl.css" />
          </Head>
          <div className="tempHome" 
               style={{
                 position: "absolute",
                 left: "calc(50% - 509px/2 + 0.5px)",
                 top: "calc(50% - 509px/2 + 0.5px)",
               }}>
            <img className="logo"
                 style={{
                   width: "509px",
                   height: "509px",
                 }} src="./img/RN_logo.svg" />
            <p className="underConst"
               style={{
                 marginLeft: "125px",
                 fontFamily: "'matrix-ii', serif",
                 fontWeight: "300",
                 fontStyle: "italic"
               }}>mi página está en construcción</p>
            <p className="contact"
               style={{
                 marginLeft: "125px",
                 fontFamily: "'Maitree', serif"
               }}>por ahora me puedes encontrar en <a href="https://www.instagram.com/raquel.neriz/" >Instagram</a> </p>
          </div>
          <article className="article" style={{visibility: "hidden"}}>
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
        </div>
      </>
    )
  }
}