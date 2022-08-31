import { authReducer } from '../moudles/auth';
import combineRedcuer from './combineReducer';

export const reducer = combineRedcuer({ authReducer });
