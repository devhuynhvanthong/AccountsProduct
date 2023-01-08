export const addInfo = (data) =>{
  return {
    type: 'ADD',
    payload: data
  }
}

export const setInfo = (data) =>{
  return {
    type: 'SET',
    payload: data
  }
}