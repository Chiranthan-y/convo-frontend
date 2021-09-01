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
  AUTH_REQUEST,
  AUTH_FAIL,
} from './../Actions/action.types';

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
    case AUTH_REQUEST:
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
    case SIGN_OUT_SUCCESS:
    case AUTH_FAIL: {
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
