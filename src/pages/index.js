import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Locator from "../components/trails"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Locator />
  </Layout>
)

export default IndexPage
