import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from "./components/Keypad";

class App extends Component {
    constructor() {
        super();

        this.state = {
            result: "",
            randomNoArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        } else if (button === "C") {
            this.reset()
        } else if (button === "CE") {
            this.backspace()
        }
        else {
            this.setState({
                ...this.state,
                result: this.state.result + button,
                randomNoArr: this.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
            })
           
        }
    };

    shuffleArray = (arr) => {
        arr.sort(() => Math.random() - 0.5);
          return arr;
    }


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return ( <div >
                <div className = "calculator-body" >
                    <h1 > Simple Calculator </h1>  
                    <Result result = { this.state.result }/> 
                    <Keypad onClick = { this.onClick } randomArray={this.state.randomNoArr}/>  
                </div > 
            </div>
        );
    }
}

export default App