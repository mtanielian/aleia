import { Dispatch } from 'react'
import { SET_MENU_OPEN } from '../actionsTypes/types'


type Action = | { type: typeof SET_MENU_OPEN, payload: HTMLElement | null }
export const setOpen = (anchorElement: HTMLElement | null) => (dispacth: Dispatch<Action>) => {
  dispacth({
    type: SET_MENU_OPEN,
    payload: anchorElement
  })
}