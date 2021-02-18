import React from 'react'
import Form from './components/Form'
import Result from './components/Result'

function App() {
  return (
    <div className="container mt-5 mb-5 border">
      <div className="row">
        <div className="col-md">
          <h5 className="mt-4 mb-4">Розрахунок ваги тіла</h5>
          <Form />
        </div>
        <div className="col-md">
          <Result />
        </div>
      </div>
    </div>
  )
}

export default App
