import * as constants from '../constants/constants';
import * as apiConstants from '../constants/apiconstants';
export const loginUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: apiConstants.LOGIN_URL,
    data,
    success: response => setUserInfo(response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const regsisterUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: apiConstants.REGISTER_URL,
    data,
    success: response => setRegister(response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

const setUserInfo = data => {
  var token = data.data;
  console.log('user token:', token);
  return {type: constants.ON_LOG_USER, payload: {token}};
};

const setRegister = data => {
  var otp = data.data;
  console.log(otp, 'otp...');
  return {type: constants.ON_REG_USER, payload: {otp}};
};
