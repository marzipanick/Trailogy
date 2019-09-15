import React from "react"

import SEO from "./seo"

class MyTrails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trails: [],
    }
  }
  componentDidMount() {
    fetch(
      `https://www.hikingproject.com/data/get-trails?lat=${this.props.latitude}&lon=${this.props.longitude}&maxDistance=200&maxResults=500&key=200558592-cd4e15044ecd137cb665b865035fef34`
    )
      .then(response => response.json())
      .then(myJson => this.setState({ trails: myJson }))
  }

  render() {
    return (
      <div>
        <SEO title="Page two" />
        <h1>Trails near you</h1>
        {this.state.trails.trails &&
          this.state.trails.trails.map(
            trail =>
              trail.conditionStatus === "All Clear" && (
                <div className="trails" key={trail.id}>
                  <img src={trail.imgMedium} />
                  <div className="traildata">
                    <h4>{trail.name}</h4>
                    <h6>Distance: {trail.length} miles</h6>
                  </div>
                </div>
              )
          )}
      </div>
    )
  }
}

export default MyTrails
