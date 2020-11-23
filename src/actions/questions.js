
import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { ADD_QUESTION, RECEIVE_QUESTIONS, SAVE_ANSWER } from './actionType'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveUserAnswer({ authedUser, qid, answer }) {
  return {  type: SAVE_ANSWER, authedUser, qid, answer }
}

export function manageSaveAnswer(info) {
  
  return (dispatch => {
      return _saveQuestionAnswer(info)
          .then(() => { dispatch(saveUserAnswer(info)) })
  })
}

export function manageSaveQuestion(question) {
  return (dispatch) => {
      return _saveQuestion(question)
          .then((question) => {
              dispatch(addUserQuestion(question))
          })
  }
}

export function addUserQuestion(question) {
  return {type: ADD_QUESTION, question}
}




