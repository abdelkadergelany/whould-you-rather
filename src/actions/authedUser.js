import { LOGOUT, SET_AUTHED_USER } from "./actionType"



export function setAuthedUser (id) {
  return { type: SET_AUTHED_USER, id, }
} 

export function logout () {
  return { type: LOGOUT, id:null
  }
} 