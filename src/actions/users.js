import { GET_ALL_USERS, RECEIVE_USERS } from "./actionType"

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
} 


export function getAllUsers (users) {
    return {
      type: GET_ALL_USERS,
      users,
    }
  } 

