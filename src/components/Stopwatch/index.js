/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: '00',
    seconds: '0',
    isTimerStart: true,
    isInitialTimer: true,
  }

  componentWillUnmount = () => {
    this.clearingIntervel()
  }

  clearingIntervel = () => clearInterval(this.intervelId)

  clickStart = () => {
    const {isTimerStart} = this.state
    if (isTimerStart) {
      this.intervelId = setInterval(() => {
        this.setState(prevState => ({seconds: parseInt(prevState.seconds) + 1}))
      }, 1000)
    }
    this.setState(prevState => ({isTimerStart: false, isInitialTimer: false}))
  }

  clickReset = () => {
    this.clearingIntervel()
    this.setState({
      minutes: '00',
      seconds: '00',
      isTimerStart: true,
      initialTimer: true,
    })
  }

  clickStop = () => {
    const {minutes, seconds} = this.state
    this.setState({minutes, seconds})
    this.setState(prevState => ({isTimerStart: !prevState.isTimerStart}))
    this.clearingIntervel()
  }

  timer = () => {
    const {minutes, seconds, isInitialTimer} = this.state
    const noOfMinutes = Math.floor(seconds / 60)
    const noOfSeconds = Math.floor(seconds % 60)
    const displayMinutes = noOfMinutes > 9 ? noOfMinutes : `0${noOfMinutes}`
    const displaySeconds = noOfSeconds > 9 ? noOfSeconds : `0${noOfSeconds}`
    return `${displayMinutes}:${displaySeconds}`
  }

  render() {
    const {seconds, minutes, isInitialTimer} = this.state

    return (
      <div className="mainContainer">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="timerCardContainer">
            <div>
              <div className="timerImageContainer">
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                    alt="stopwatch"
                  />
                </div>
                <div className="timerNameContainer">
                  <p className="timer">Timer</p>
                </div>
              </div>
              <p className="stopWatch">
                {isInitialTimer ? '00:00' : this.timer()}
              </p>
              <div>
                <button className="startButton" onClick={this.clickStart}>
                  Start
                </button>
                <button className="stopButton" onClick={this.clickStop}>
                  Stop
                </button>
                <button className="resetButton" onClick={this.clickReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
