import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList';
import ToDoItems from './Components/ToDoItem';


class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
      done: false,
      isEditing: false
    }
  }

  componentDidMount() {
    this.setState({
      items: [
        {
          key: '1',
          text: 'xin chao',
          done: false,
          isEditing: false
        },
        {
          key: '2',
          text: 'hello',
          done: true,
          isEditing: false
        }
      ]
    })
  }

  handleInput = e => {
    // console.log('Hello Input')
    const itemText = e.target.value
    const currentItem = {
      text: itemText,
      key: Date.now(),
      done: false
    }
    this.setState({
      currentItem
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
        done: false
      })
    }
  }

  showDoneItem = (key) => {
    const newItems = this.state.items.filter(item => item.done);
    this.setState({
      items: newItems,
    })
  }

  markItem = (key) => {
    const newItems = this.state.items.map(item => item.key === key ? { ...item, done: !item.done } : item);
    this.setState({
      items: newItems,
    })
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  editItem = () => {
    console.log('aloalo');
    const isEditingItem = this.state.isEditing;
    this.setState({
        isEditing: !isEditingItem,
    })
}


  render() {
    return (
      <div className="App">
        <ToDoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          done={this.state.done} />
        <ToDoItems entries={this.state.items}
          markItem={this.markItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
      </div>
    )
  }
}

export default App;
