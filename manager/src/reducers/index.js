import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer, // state slice keyed 'auth' maintained by AuthReducer
  employeeForm: EmployeeFormReducer
});
