import React from 'react';
import { connect } from 'react-redux'

const WhoResult = (_props) => {
  return (
    <p>
      Рекомендована вага по ВООЗ: <span className="badge bg-secondary"> {_props.who}</span> кг
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    gender: state.gender,
    height: state.height,
    weight: state.weight,
    who: state.who,
    bmi: state.bmi
  }
}

export default connect(mapStateToProps, null)(WhoResult)