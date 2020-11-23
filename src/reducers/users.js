import { ADD_QUESTION, RECEIVE_USERS, SAVE_ANSWER } from "../actions/actionType"

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return { ...state,...action.users}
      case SAVE_ANSWER:
        return {...state,[action.authedUser]: {
                ...state[action.authedUser],
                answers: {...state[action.authedUser].answers, [action.qid]: action.answer}
            }
        }
    case ADD_QUESTION:
        const { question } = action
        return { ...state,
            [question.author]: { ...state[question.author],
               questions: state[question.author].questions.concat([question.id])
            }
        }
    default :
      return state
  }
} 