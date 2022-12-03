// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {Mangocount: 0, Bananacount: 0}

  mangoCount = () => {
    const {Mangocount} = this.state
    this.setState(prevstate1 => ({Mangocount: prevstate1.Mangocount + 1}))
  }

  bananaCount = () => {
    const {Bananacount} = this.state
    this.setState(prevstate2 => ({Bananacount: prevstate2.Bananacount + 1}))
  }

  render() {
    const {Mangocount, Bananacount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <i className="spanEl">{Mangocount}</i> mangoes
            <i className="spanEl"> {Bananacount} </i> bananas
          </h1>
          <div className="fruits-container">
            <div className="card-container">
              <img
                className="images"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" onClick={this.mangoCount}>
                Eat Mango
              </button>
            </div>
            <div className="card-container">
              <img
                className="images"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" onClick={this.bananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
