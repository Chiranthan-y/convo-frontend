import {getData} from '../../Utils/storage';
import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  AUTH,
} from './../Actions/action.types';




const userdata = null;
getData().then(res => {
  const userdata = res;
  userdata = userdata;
});

console.log(userdata);
/*
export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('@userDATA');
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};
*/

//! get the data from localstorrage and add it the currentUser and token if exist
//! getData () will return promise so HOW CAN I GET THE DATA OUT AND INITIALIZE TO THE  VARIABLES

const initState = {
  currentUser: null,
  token: null,
  error: '',
  loading: false,
  isAuthenticated: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentUser: null,
        isAuthenticated: false,
      };

    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case AUTH:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        currentUser: action.payload.user,
        isAuthenticated: true,
      };
    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        token: null,
      };
    }
    default:
      return {...state};
  }
};

export default authReducer;
