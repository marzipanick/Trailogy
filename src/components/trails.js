import React from "react"
import MyTrails from "../components/myTrails"
import Layout from "../components/layout"
import { Link } from "gatsby"

class Locator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: "",
      longitude: "",
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }
  componentDidMount() {
    this.getMyLocation()
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        error => {
          this.setState({
            latitude: "err-latitude",
            longitude: "err-longitude",
          })
        }
      )
    }
  }
  render() {
    return (
      <div>
        {this.state.longitude && (
          <MyTrails
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        )}
      </div>
    )
  }
}

export default Locator
