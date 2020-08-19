import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
	form: formReducer
})

export default rootReducer
