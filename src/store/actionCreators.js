import { 
  CHANGE_INPUT_VALUE, 
  ADD_TODO_ITEM, 
  DELETE_TODO_ITEM, 
  INIT_LIST_ACTION,
  GET_INIT_LIST 
} from './actionTypes'
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

export const getInitList = () => ({
  type: GET_INIT_LIST  
})