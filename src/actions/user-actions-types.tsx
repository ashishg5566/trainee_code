import {createAction} from 'redux-actions';
// this is for reset password
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const resetPassword = createAction(RESET_PASSWORD);
// this is for get privacy data
export const GET_PRIVACYDATA = 'GET_PRIVACYDATA';
export const getPrivacyData = createAction(GET_PRIVACYDATA);
 