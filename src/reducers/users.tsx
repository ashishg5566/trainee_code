import {
  
  RESET_PASSWORD,
  
} from '../actions/user-actions-types';
const initialState = {
  userData: {},
  userToken: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
     case RESET_PASSWORD: {
      console.warn(
        'inside reduces 111',
        JSON.stringify(action.payload, undefined, 2),
      );
      let user = action.payload;
      return {
        ...state,
        userToken: user.userToken,
        userData: {...user.data},
      };
    }
    default:
      return state;
  }
}
