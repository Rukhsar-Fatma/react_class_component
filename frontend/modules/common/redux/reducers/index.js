import { combineReducers } from 'redux';
import accountListDataReducer from './accountListDataReducer';
import userSignUpDataReducer from './userSignUpDataReducer';

export default combineReducers({
    accountListDataReducer : accountListDataReducer,
    userSignUpData : userSignUpDataReducer
})