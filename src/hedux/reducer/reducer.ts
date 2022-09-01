import { authReducer } from '../moudles/auth';
import combineReducers from './combineReducer';

export const reducer = combineReducers({ authReducer });
