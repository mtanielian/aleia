import { Dispatch, MouseEvent } from 'react'
import { SET_MENU_OPEN } from '../actionsTypes/types'


type Action = | { type: typeof SET_MENU_OPEN, payload: MouseEvent<HTMLElement | null> }
export const setOpen = (anchorElement: MouseEvent<HTMLElement | null>) => (dispacth: Dispatch<Action>) => {
  dispacth({
    type: SET_MENU_OPEN,
    payload: anchorElement
  })
}