import React, { Component } from 'react';

class ToDoItems extends Component {
    
    

    createTasks = item => {
        return (<div key={item.key}>
            <li onClick={() => this.props.markItem(item.key)}
                className={item.done === true ? "line-throught-text" : ""}
                onDoubleClick={() => this.props.editItem(item.key)} >
                {item.text}
            </li>
            <button onClick={() => this.props.deleteItem(item.key)}>Delete</button>
        </div>
        )
    }

    render() {

        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return <div>
            <ul className="theList" >{listItems}</ul>
            <button > Show All </button>
            <button > Show Done </button>
            <button > Show Undone </button>
        </div>


    }
}
export default ToDoItems