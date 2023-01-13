import { AnyAction } from 'redux'
import { SET_MENU_OPEN } from '../actionsTypes/types'  

const INITIA_STATE = {
  anchorElNav: null
}

const MenuOptionsReducer = (state = INITIA_STATE, action: AnyAction) => {
  switch (action.type) {
  case SET_MENU_OPEN:
    return {
      ...state,
      anchorElNav: action.payload
    }
  default:
    return state
  }
}

export default MenuOptionsReducer