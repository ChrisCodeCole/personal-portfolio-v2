import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/sliceExample';

export default configureStore({
	reducer: {
		counter: counterReducer,
		//alert: alertReducer,
	},
});
