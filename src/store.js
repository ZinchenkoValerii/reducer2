import { createStore, combineReducers } from "redux";

import comments from "./commentsReducer";

const rootReducer = combineReducers({ comments });

const store = createStore(rootReducer);

export default store;
