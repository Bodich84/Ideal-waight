import React from 'react'
import { connect } from 'react-redux'

const Result = (_props) => {

  const imtToWeight = (bmi, height) => {
    return bmi * (height / 100) ** 2
  }

  const minBmiNormal = 18
  const maxBmiNormal = 24.9
  const minNormalWeight = Math.ceil(imtToWeight(minBmiNormal, _props.height))
  const maxNormalWeight = Math.floor(imtToWeight(maxBmiNormal, _props.height))

  const infoNormalWeight = () => {
    let info = ''
    if (_props.bmi < minBmiNormal) {
      info = <div>До нормальної ваги <span className="badge bg-secondary">+ {minNormalWeight - _props.weight}</span> кг</div>
    }
    if (_props.bmi > maxBmiNormal) {
      info = <div>До нормальної ваги <span className="badge bg-secondary">- {_props.weight - maxNormalWeight}</span> кг</div>
    }
    if (_props.bmi > minBmiNormal && _props.bmi < maxBmiNormal) {
      return info = <div>Вага в межах допустимих показників</div>
    }
    return <>{info}</>
  }

  const infoWhoWeight = () => {
    if (_props.weight < _props.who) {
      return <>До ваги рекомендованою ВООЗ <span className="badge bg-secondary">+ {Math.ceil(_props.who - _props.weight)}</span> кг</>
    }
    if (_props.weight > _props.who) {
      return <>До ваги рекомендованою ВООЗ <span className="badge bg-secondary">- {Math.ceil(_props.weight - _props.who)}</span> кг</>

    }
  }

  const infoWeight = () => {
    let info = ''
    if (_props.bmi <= 16) {
      info = <span className="badge bg-danger text-white">виражений дефіцит маси</span>
    }
    if (_props.bmi > 16 && _props.bmi < 18) {
      info = <span className="badge bg-warning text-white">недостатня маса тіла</span>
    }
    if (_props.bmi >= 18 && _props.bmi < 25) {
      info = <span className="badge bg-info">нормальна вага</span>
    }
    if (_props.bmi >= 25 && _props.bmi < 30) {
      info = <span className="badge bg-warning text-white">надлишкова маса тіла</span>
    }
    if (_props.bmi >= 30 && _props.bmi < 35) {
      info = <span className="badge bg-danger text-white">ожиріння 1 ступеня</span>
    }
    if (_props.bmi >= 35 && _props.bmi < 40) {
      info = <span className="badge bg-danger text-white">ожиріння 2 ступеня</span>
    }
    if (_props.bmi >= 40) {
      info = <span className="badge bg-danger text-white">ожиріння 3 ступеня</span>
    }
    return <h5 className="mt-4">Висновок {info}</h5>
  }

  if (_props.height && _props.weight) {
    return (
      <div className="mb-3">
        {infoWeight()}

        <ul className="list-group ">

          <li className="list-group-item">
            {infoNormalWeight()}
            Нормальною вагою вважається вага в діапазоні
            від <span className="badge bg-secondary"> {minNormalWeight}</span> по <span className="badge bg-secondary"> {maxNormalWeight}</span> кг
          </li>

          <li className="list-group-item">
            {infoWhoWeight()}
            Рекомендована вага по ВООЗ <span className="badge bg-secondary"> {_props.who}</span> кг
            <br/>
              На підставі формули розрахунку індексу маси тіла (ІМТ)
              Всесвітня організація охорони здоров'я (ВООЗ) вивела свої рекомендації щодо
              ідеальної ваги людини.
          </li>

          <li className="list-group-item">Індекс маси тіла <span className="badge bg-secondary">{_props.bmi}</span>
            <p>
              Індекс маси тіла величина, що дозволяє оцінити ступінь відповідності маси людини та її
              зросту, й тим самим, непрямо оцінити, чи є маса недостатньою, нормальною,
              надмірною (ожирінням).
            </p>

            <ul>
              <li>16 і менше – виражений дефіцит маси,</li>
              <li>16 – 17,9 – недостатня маса тіла,</li>
              <li>18 – 24,9 – нормальна вага,</li>
              <li>25 – 29,9 – надлишкова маса тіла,</li>
              <li>30 – 34,9 – ожиріння 1 ступеня,</li>
              <li>35 – 39,9 – ожиріння 2 ступеня,</li>
              <li>40 і більше – ожиріння 3 ступеня.</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
  return ''
}

const mapStateToProps = state => {
  return {
    gender: state.gender,
    height: state.height,
    weight: state.weight,
    who: state.who,
    bmi: state.bmi

  }
}

export default connect(mapStateToProps)(Result)