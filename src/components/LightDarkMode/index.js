// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  changeClassName = () => {
    this.setState({
      isClicked: false,
    })
  }

  replaceMode = () => {
    this.setState({
      isClicked: true,
    })
  }

  renderAuthBtn = () => {
    const {isClicked} = this.state
    if (isClicked === true) {
      return (
        <button className="btn" type="button" onClick={this.changeClassName}>
          Light Mode
        </button>
      )
    }
    return (
      <button className="btn1" type="button" onClick={this.replaceMode}>
        Dark Mode
      </button>
    )
  }

  render() {
    const {isClicked} = this.state
    const modeClassName = isClicked ? 'main' : 'card'
    const headClassName = isClicked ? 'heading' : 'heading1'
    return (
      <div className="container">
        <div className={modeClassName}>
          <h1 className={headClassName}>Click To Change Mode</h1>
          {this.renderAuthBtn()}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
