import React, {Component} from 'react';

export class ToDoItems extends Component {
    createTasks = (item) => {
        return <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>{item.text}</li>
        
    }
    render(){
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return <ul className="theList">{listItems}</ul>
            
    }
}
export default ToDoItems