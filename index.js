import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Wheel extends React.Component {
    constructor(props){
        super(props);
        this.state ={degree:0};
    }
    handleClick() {
        this.setState( {degree:this.state.degree+10, });
    }

    render(){
        let styles = {transform: 'rotate('+this.state.degree+'deg)'};

        return(
            <div className="wheel" style={styles} onClick={()=>this.handleClick()}>

                <div className ="section1" >
                </div>
                <div className ="section2" >
                </div>
                <div className="head">HEADS</div>
                <div className="tail">TAILS</div>
                <div className ="spin">
                    <div className ="innerspin">
                    </div>

                </div>
            </div>
        );
    }
}
class Triangle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="triangle" ></div>);

    }
}

class Game extends React.Component {
    render(){
        return(
            <div className="game" >

                <ShowHide className="showhide" />
            </div>
        );
    }
}
class ShowHide extends React.Component {
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render () {
        return (
            <div>
                {this.state.isHidden && <Wheel onClick={(i) => this.handleClick(i)} /> }
                {!this.state.isHidden && <Triangle/>}
                <button className="heck" onClick={this.toggleHidden.bind(this)} disabled={this.state.isHidden}>
                   Click for Wheel
                </button>
                <button className="heck" onClick={this.toggleHidden.bind(this)} disabled={!this.state.isHidden}>
                    Click for Triangle
                </button>

            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);