
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
//var e =require('../../assets/about.png');
class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1>todolist</h1>
        <img src={require('../../assets/about.png')} alt=""/>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
