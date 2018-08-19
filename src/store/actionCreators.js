import { 
  CHANGE_INPUT_VALUE, 
  ADD_TODO_ITEM, 
  DELETE_TODO_ITEM, 
  INIT_LIST_ACTION 
} from './actionTypes'
import axios from 'axios'
/**
 * 函数
 * 返回{} 对象
 */

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (value) => ({
  type: INIT_LIST_ACTION,
  value
})

// 使用了 thunk 可以返回函数
/**
 * 异步函数
 */
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then(res => {      
      const action = initListAction(res.data)
      dispatch(action)
    })
  }
}