const initialState = {
  list: [],
  activeID: null
}
export default function MyInfo(state = initialState,action){
  switch (action.type){
    case 'ADD':{
      const newList = [...state.list]
      newList.push(action.payload)
      return {
        ...state,
        list: newList
      }
    }
    case 'SET':{
      return state
    }
    default:
      return state
  }
}