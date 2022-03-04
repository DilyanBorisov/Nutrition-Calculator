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
      msg = '(obese)'
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

          <footer>
            <br />
            <a href='https://www.linkedin.com/in/dilyanmitkovborisov/'>
              <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 34 34" class="global-nav__logo">
                <title>LinkedIn</title>
                <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentcolor"></path>
              </svg></a>

            <a href='https://github.com/DilyanBorisov'>
              <svg height="30" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                <title>GitHub</title>
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentcolor"></path>
              </svg>
            </a>
          </footer>
        </div>
      </div >
    );
  }
}

export default App;
