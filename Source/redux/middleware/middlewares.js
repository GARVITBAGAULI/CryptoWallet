import axios from "axios";
import * as constants from "../constants/constants";
import * as apiConstants from "../constants/apiconstants"
//import {logoutUser} from './actions/authActionCreators';
export const apiMiddleware =({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type !== constants.API) return next(action);
    // dispatch({type:constants.TOGGLE_LOADER});
    const BASE_URL = apiConstants.BASE_URL;

    const AUTH_TOKEN = getState().user.token;
    console.log("TOKEN-->>", AUTH_TOKEN);
    if (AUTH_TOKEN)
      axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN?.token}`;
    const { url, method, success, data, postProcessSuccess, postProcessError } =
      action.payload;
    axios({
      method,
      url: BASE_URL + url,
      data: data ? data : null,
      formData: data ? data : null,
    })
      .then((response) => {
        // dispatch({type:constants.TOGGLE_LOADER});
        if (success) dispatch(success(response.data));
        if (postProcessSuccess) postProcessSuccess(response.data);
      })
      .catch((err) => {
        console.log("1");

        if (!err.response) {
          //  dispatch({type:constants.TOGGLE_LOADER});
          console.warn(err);
        } else {
          console.log("11");

          //dispatch({type:constants.TOGGLE_LOADER});
          // if(err.response && err.response.status=== 400)
          // dispatch(logoutUser());
          console.log("errors", err.response);
          if (err.response.data.error.message) {
            console.log("Entered");
            //   dispatch({type:constants.TOGGLE_LOADER});
            if (postProcessError)
              postProcessError(err.response.data.error.message);
          }
        }
      });
  };