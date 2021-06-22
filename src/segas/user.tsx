import { put, takeLatest, all, call, takeEvery } from 'redux-saga/effects';
import {
   RESET_PASSWORD,
   GET_PRIVACYDATA,
  
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
function* getPrivacyData({ payload: { callback } }) {
  const payload = {
    method: 'GET',
    url: `admin/view_static_content/?user_type=user&page_name=Privacy%20Policy`,
  };
  const { result, error } = yield call(httpClient, payload);
  callback({ result, error });
  if (!error) {
    if (result) {
       console.log('get privacydata result', JSON.stringify(result, undefined, 2));
      callback({ result, error });
       
    } else {
      Toast.show(result.message);
    }
  }
}








function* User() {
  yield all([
     
    yield takeLatest(RESET_PASSWORD, resetPassword),
    yield takeLatest(GET_PRIVACYDATA, getPrivacyData),

  ]);
}

export default User;
