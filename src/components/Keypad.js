import React, { Component } from 'react';

class Keypad extends Component {

    render() {
        return ( 
        <div className = "button" >
            <button name = "("onClick = { e => this.props.onClick(e.target.name) } > ( </button> 
            <button name = "CE"onClick = { e => this.props.onClick(e.target.name) } > CE </button> 
            <button name = ")"onClick = { e => this.props.onClick(e.target.name) } > ) </button> 
            <button name = "C"onClick = { e => this.props.onClick(e.target.name) } > C </button><br/>

            {this.props.randomArray.map((num,index)=>{
                return <>
                    <button name ={num} onClick = { e => this.props.onClick(e.target.name) } > {num} </button>
                    {(index === 2) && <button name ="+" onClick = { e => this.props.onClick(e.target.name) } > + </button>}
                    {(index === 5) && <button name ="-" onClick = { e => this.props.onClick(e.target.name) } > - </button>}
                    {(index === 8) && <button name ="*" onClick = { e => this.props.onClick(e.target.name) } > * </button>}
                    {(index === 8) && <button name = "."onClick = { e => this.props.onClick(e.target.name) } > . </button>}
                                        
                </>
            })}
            <button name = "="onClick = { e => this.props.onClick(e.target.name) } >= </button> 
            <button name = "/"onClick = { e => this.props.onClick(e.target.name) } > ÷ </button><br/>
            </div>
        );
    }
}
export default Keypad