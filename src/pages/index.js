import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WhatWeDo from '../components/whatWeDo';
import WhoWeAre from '../components/whoWeAre';
import Home from '../components/home';
import LetsTalk from '../components/letsTalk';

import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Home />
        <WhatWeDo />
        <WhoWeAre image={data.file.childImageSharp.fixed} />
        <LetsTalk />
    </Layout>
)

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;