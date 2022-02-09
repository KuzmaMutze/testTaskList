import { combineReducers, createStore, compose } from 'redux';
import { appReducer } from './reducers/appReducer';

let rootReducers = combineReducers({
    app: appReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, composeEnhancers());
// @ts-ignore
window.__store__ = store;

// types
type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
    PropertiesTypes<T>
>;
