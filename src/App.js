import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: '',
      age: '',
      height: '',
      weight: '',
      activity: '',
      goal: ''
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    let bmi = this.state.weight * 10000 / this.state.height / this.state.height

    let msg
    if (bmi < 18.5) {
      msg = '(underweight)'
    } else if (bmi < 25) {
      msg = '(normal weight)'
    } else if (bmi < 30) {
      msg = '(overweight)'
    } else if (bmi >= 30) {
      msg = '(overweight)'
    }

    let dailyNeed = this.state.activity * (this.state.weight * 10 + this.state.height * 6.25 - this.state.age * 4.9 + 6 - this.state.sex)

    let diff
    if (this.state.sex < 160) {
      diff = bmi * 20 + 300
    } else {
      diff = bmi * 20
    }

    let dailyIntake = dailyNeed + diff * this.state.goal

    let protein = dailyIntake * 0.25 / 4
    let carbs = dailyIntake * 0.5 / 4
    let fats = dailyIntake * 0.25 / 9

    function onHover(e) {
      // e.target.style.color = 'black'
      // e.target.style.textDecoration = 'underline'
      e.target.style.textShadow = "0 0 15px"
    }

    function noHover(e) {
      // e.target.style.textDecoration = 'none'
      e.target.style.textShadow = 'none'
    }

    return (
      <div className='App'>
        <h1
          onMouseOver={onHover}
          onMouseLeave={noHover}><img src={require('./logo2.png')} height='100' ></img>Nutrition Calculator</h1>

        <hr />

        <h2
          onMouseOver={onHover}
          onMouseLeave={noHover}>Personal Info:</h2>

        <form>
          <p
            onMouseOver={onHover}
            onMouseOut={noHover}>
            <label>
              Sex:
              <select
                id='sex'
                value={this.state.sex}
                onChange={this.handleInput}>
                <option value={0}>---choose---</option>
                <option value={1}>male</option>
                <option value={167}>female</option>
              </select>
            </label>
          </p>

          <p
            onMouseOver={onHover}
            onMouseOut={noHover}>
            <label>
              Age:
              <input
                id='age'
                value={this.state.age}
                onChange={this.handleInput}
                type='number'
                placeholder='years'
                autoComplete='off'
              />
            </label>years
          </p>

          <p
            onMouseOver={onHover}
            onMouseOut={noHover}>
            <label>
              Height:
              <input
                id='height'
                value={this.state.height}
                onChange={this.handleInput}
                type='number'
                placeholder='cm'
                autoComplete='off'
              />
            </label>cm
          </p>

          <p
            onMouseOver={onHover}
            onMouseOut={noHover}>
            <label>
              Weight:
              <input
                id='weight'
                value={this.state.weight}
                onChange={this.handleInput}
                type='number'
                placeholder='kg'
                autoComplete='off'
              />
            </label>kg
          </p>

          <p
            onMouseOver={onHover}
            onMouseOut={noHover}>
            <label>
              Physical Activity:
              <select
                id='activity'
                value={this.state.activity}
                onChange={this.handleInput}>
                <option value={0}>---choose---</option>
                <option value={1.2}>very low</option>
                <option value={1.375}>low</option>
                <option value={1.55}>medium</option>
                <option value={1.725}>high</option>
                <option value={1.9}>very high</option>
              </select>
            </label>
          </p>

          <p
            onMouseOver={onHover}
            onMouseOut={noHover}>
            <label>
              Weight Goal:
              <select
                id='goal'
                value={this.state.goal}
                onChange={this.handleInput}>
                <option value={0.0000001}>---choose---</option>
                <option value={-1}>reduce</option>
                <option value={0}>maintain</option>
                <option value={1}>increase</option>
              </select>
            </label>
          </p>
        </form>
        <hr />

        <h2
          onMouseOver={onHover}
          onMouseLeave={noHover}>Results:</h2>

        <div>
          <p
            onMouseOver={onHover}
            onMouseLeave={noHover}>
            BMI: {Math.round((bmi + Number.EPSILON) * 100) / 100} {msg}
          </p>

          <p
            onMouseOver={onHover}
            onMouseLeave={noHover}>
            Energy Intake: {Math.round(dailyIntake)} kcal/day
          </p>

          <p
            onMouseOver={onHover}
            onMouseLeave={noHover}>
            Protein: {Math.round(protein)} gr/day
          </p>

          <p
            onMouseOver={onHover}
            onMouseLeave={noHover}>
            Carbs: {Math.round(carbs)} gr/day
          </p>

          <p
            onMouseOver={onHover}
            onMouseLeave={noHover}>
            Fats: {Math.round(fats)} gr/day
          </p>
          <hr />

          <div>
            <br>
            </br>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 34 34" class="global-nav__logo">
              <title>LinkedIn</title>
              <g>
                <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
              </g>
            </svg>
            <a href='https://www.linkedin.com/in/dilyanmitkovborisov/'
              onMouseOver={onHover}
              onMouseLeave={noHover}>   Developed by Dilyan Borisov</a>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
