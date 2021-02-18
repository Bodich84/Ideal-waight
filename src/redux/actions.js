export const newData = (gender, height, weight, who, bmi) => {
  return {
    type: 'NEW_DATA',
    payload: {
      gender,
      height,
      weight,
      who,
      bmi
    }
  }
}