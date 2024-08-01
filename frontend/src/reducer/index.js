import { combineReducers } from "@reduxjs/toolkit";

import groupReducer from '../slices/groupSlice';

// Combine reducers for note and group into a single rootReducer
const rootReducer = combineReducers({
    group: groupReducer
});

export default rootReducer;