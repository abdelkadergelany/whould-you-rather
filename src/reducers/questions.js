import { ADD_QUESTION, RECEIVE_QUESTIONS, SAVE_ANSWER } from "../actions/actionType"

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {  ...state,...action.questions}

      case SAVE_ANSWER:
        const { authedUser, qid, answer } = action
        return {
            ...state,
            [qid]: { ...state[qid],
                [answer]: { ...state[qid][answer],
                    votes: [...state[qid][answer].votes, authedUser] } }
        }
        case ADD_QUESTION:
          const { question } = action
          return { ...state, [question.id]: question}

    default :
      return state
  }
} 