import { put, takeLatest, all, call, takeEvery } from 'redux-saga/effects';
import {
   RESET_PASSWORD,
  
} from '../actions/user-actions-types';
import httpClient from './http-client';
import Toast from 'react-native-simple-toast';
 /***************************reset password Auth Segas*******************************/

function* resetPassword({ payload: { data, callback } }) {
  console.warn('data in saga', data);
  const formdata = new FormData();
  formdata.append('confirm_password', data.confirm_password);
  formdata.append('old_password', data.old_password);
  formdata.append('password', data.password);
  const payload = {
    data: formdata,
    method: 'POST',
    url: 'admin/reset_password/',
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      console.log('reset password result', JSON.stringify(result, undefined, 2));
      callback({ result, error });
     
    } else {
      Toast.show(result.message);
    }
  }
}
function* User() {
  yield all([
     
    yield takeLatest(RESET_PASSWORD, resetPassword),

  ]);
}

export default User;
