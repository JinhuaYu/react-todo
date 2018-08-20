import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

// worker Saga: will be fired on actions
function* getInitList() {
  try {
    const res = yield axios.get('/api/todolist')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

/**
 * generator 函数
 * 当接收到是GET_INIT_LIST时 执行 getInitList 函数
 */
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga