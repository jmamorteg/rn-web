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
        <article>
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