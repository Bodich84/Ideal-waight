import React, { useState } from 'react'
import { connect } from 'react-redux'
import { newData } from '../redux/actions'

const Form = (_props) => {

  const [gender, setGender] = useState(_props.gender)
  const [height, setHeight] = useState(_props.height);
  const [weight, setWeight] = useState(_props.weight);

  const calcWho = (height, gender) => {
    let value = Math.round(((height / 100) ** 2) * 21.745)
    if (gender === 'man') {
      return value + 2.2
    }
    if (gender === 'woman') {
      return value - 2.2
    }
  }

  const calcBmi = (height, weight) => {
    return (Math.round((weight / ((height / 100) ** 2)) * 10)) / 10
  }

  let who = calcWho(height, gender)
  let bmi = calcBmi(height, weight)

  const handlerValue = (event) => {
    if (event.target.name === 'height') {
      setHeight(event.target.value)
    }
    if (event.target.name === 'weight') {
      setWeight(event.target.value)
    }
  }

  const handlerRadio = (event) => {
    setGender(event.target.value)
    // const genderInputs = document.getElementsByName('gender')
    // for (let i = 0; i < genderInputs.length; i++) {
    //   if (genderInputs[i].checked) {
    //     console.log(genderInputs[i].value)
    //   }
    // }
  }

  const handlerForm = (event) => {
    event.preventDefault()
    _props.newData(gender, height, weight, who, bmi)
  }

  // const radioInputDefaultChecked = () => {
  //   const inp = document.getElementsByName('gender')
  //   for (let i = 0; i < inp.length; i++) {
  //     if (inp[i].value === gender) {
  //       console.log(inp[i])
  //       //inp[i].checked = true
  //     }
  //   }
  // }

  // radioInputDefaultChecked()


  return (
    <form onSubmit={handlerForm}>
      <div className="border-bottom mb-3 pb-3">
        <div>Стать</div>
        <div className="form-check form-check-inline">
          <input className="form-check-input"
            type="radio"
            name="gender"
            id=""
            value="man"
            onChange={handlerRadio}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="">
            Чоловік
            </label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input"
            type="radio"
            name="gender"
            id=""
            value="woman"
            onChange={handlerRadio}
          />
          <label className="form-check-label" htmlFor="">
            Жінка
            </label>
        </div>
      </div>

      <div className="border-bottom mb-3">
        <div className="row mb-3">
          <div className="col-sm-3">
            <label htmlFor="" className="col-form-label">Зріст (см)</label>
          </div>
          <div className="col-sm-3">
            <input
              type="number"
              name="height"
              className="form-control"
              value={height}
              onChange={handlerValue}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-3">
            <label htmlFor="" className="col-form-label">Вага (кг)</label>
          </div>
          <div className="col-sm-3">
            <input
              type="number"
              name="weight"
              className="form-control"
              value={weight}
              onChange={handlerValue}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="pb-3 mb-3">
          <button type="submit" className="btn btn-primary">Розрахувати</button>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    gender: state.gender,
    height: state.height,
    weight: state.weight,
  }
}

const mapDispatchToProps = {
  newData
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)