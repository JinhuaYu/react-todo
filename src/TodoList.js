/**
 * 容器组件
 */
import React, { Component } from 'react'
import store from './store/'
import { 
  getInputChangeAction, 
  getAddItemAction,
  getDeleteItemAction, 
  getTodoList
} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this) // 输入框值变化
    this.handleStoreChange = this.handleStoreChange.bind(this) // 获取state发生变化
    this.handleBtnClick = this.handleBtnClick.bind(this) // 增加listitem
    this.handleItemDelete = this.handleItemDelete.bind(this) // 删除listitem
    store.subscribe(this.handleStoreChange) // store tree每次变更后执行
  }
  
  // 渲染
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue} 
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    // axios.get('/api/todolist')
    //   .then(res => {
    //     const action = initListAction(res.data)
    //     store.dispatch(action)
    //   })
    const action = getTodoList()
    store.dispatch(action)
  }

  // 输入框值变化
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 获取state发生变化
  handleStoreChange() {
    this.setState(store.getState())
  }

  // 增加listitem
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  // 删除listitem
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

}

export default TodoList
