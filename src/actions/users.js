export const RECEIVE_USERS = 'RECEIVE_USERS'
export const GET_ALL_USERS = 'GET_ALL_USERS'

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