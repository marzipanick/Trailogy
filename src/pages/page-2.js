import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trails: [],
    }
  }
  componentDidMount() {
    fetch(
      "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200558592-cd4e15044ecd137cb665b865035fef34"
    )
      .then(response => response.json())
      .then(myJson => this.setState({ trails: myJson }))
  }
  render() {
    console.log(typeof this.state.trails)
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        {this.state.trails &&
          this.state.trails.trails.map(trail => (
            <div>
              <p>{trail.name}</p>
              <img src={trail.imgSmallMed} />
            </div>
          ))}
        {/* <p>{this.state.trails}</p> */}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage
