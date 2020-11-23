
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'




export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveUserAnswer({ authedUser, qid, answer }) {
  return {
      type: SAVE_ANSWER,
      authedUser,
      qid,
      answer
  }
}

export function manageSaveAnswer(info) {
  
  return (dispatch => {
      return _saveQuestionAnswer(info)
          .then(() => {
              dispatch(saveUserAnswer(info))
          })
  })
}


export function addUserQuestion(question) {
  return {
      type: ADD_QUESTION,
      question
  }
}


export function manageSaveQuestion(question) {
  return (dispatch) => {
      return _saveQuestion(question)
          .then((question) => {
              dispatch(addUserQuestion(question))
          })
  }
}

