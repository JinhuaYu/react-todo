import { createStore, applyMiddleware,  compose } from 'redux'
// import thunk from 'redux-thunk' 项目较小时使用，较简单
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  //applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
)

const store = createStore(
  reducer,
  enhancer
)

sagaMiddleware.run(todoSagas)

export default store