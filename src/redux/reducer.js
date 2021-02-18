const initialState = {
  gender: 'man',
  height: '',
  weight: '',
  bmi: '',
  who: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DATA':
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default reducer