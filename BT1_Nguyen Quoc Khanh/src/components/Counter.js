import React from 'react';
import App from '../App';
export default class Counter2 extends React.Component {
    state = {
            statusBotton: "UP",
            check: true,
            show:1,
            counter: 1,
            
        }
    
    Show = () => {
        if (this.state.check === true) {
            this.setState({
                counter: this.state.counter+1
            })
        }

        if (this.state.check === false) {
            this.setState({
                counter: this.state.counter - 1
            })
        }

        if (this.state.counter === 19) {
            this.setState({
                statusBotton: "DOWN",
                check: false,
            })
        }
        
        if (this.state.counter === 0 ) {
            this.setState({
                show:0,
            })
        }
        if(this.state.show === 0){
            this.setState({ statusBotton: false });
        }
    }
    
    
    render(){
        return (
            <div className="App">
                <div>{this.state.counter}</div>
                <button onClick={this.Show}>{this.state.statusBotton}</button>
            </div >
        );
    }
}

