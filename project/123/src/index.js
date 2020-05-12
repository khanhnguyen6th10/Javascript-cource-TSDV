import React from 'react';
import ReactDOM from 'react-dom';



class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 0,
            content: 'Tại sao khánh lại đẹp trai'
        }
    }

    doubleclick = (e) => {
        console.log(e.target.value)
        if (this.state.status === 0) {
            return this.setState({
                status: 1,
            })
        }
        else {
            return this.setState({
                status: 0,
                content: e.target.value

            })
        }
    }
    changetxt = () => {
        if (this.state.status === 0) {
            return this.txth4();
        }
        else {

            return this.inputtxt();
        }
    }

    txth4 = () => {
        return (
            <h4 onDoubleClick={this.doubleclick}>{this.state.content}</h4>
        )
    }
    inputtxt = () => {
        return (
            <input onBlur={this.doubleclick} type="text" id="h4" ></input>
        )
    }
    componentDidUpdate(){
        if(this.state.status===1){
            document.getElementById('h4').value= this.state.content;
        }

    }

    render() {
        return (
            <div id="main">
                <div className="content-item">
                    <img src="car.jpg" />
                    {this.changetxt()}
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		            </p>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Test />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
