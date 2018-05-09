import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const degree =1800;

class Wheel extends React.Component {
	
	constructor(props){
	  super(props);
	  this.state ={degree:0,status:null};
	}
	

	handleClick() {
		let newDegree = degree;
        	let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        	let totalDegree = newDegree + extraDegree;
		this.setState( {degree:this.state.degree+totalDegree, });	
		this.setState({status: (this.state.degree/360 - Math.trunc(this.state.degree/360)) >= .50 ? "TAILS":"HEADS"});
		
		this.props.callbackFromParent(this.state.status);			
	}	

	render(){
	  let styles = {transform: 'rotate('+this.state.degree+'deg)'};
	
	  return(	
		<div className = "game">
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
			<div className="status">
                		{(this.state.degree/360 - Math.trunc(this.state.degree/360)) >= .50 ? "TAILS":"HEADS"}
				
				{/*this.state.status*/}
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
	constructor(props){
	   super(props);
	   this.state={winner: null, history:[], color:"blue",isHidden:true};
	}
	toggleHidden () {
        	this.setState({
            	isHidden: !this.state.isHidden
        	})
    	}

	myCallback =(dataFromChild)=>{
		const history=this.state.history;
		this.setState({winner:dataFromChild});
		this.setState({
			history:history.concat(this.state.winner),
			
			color:"blue"
		});

	}
	handleClick(){
		const winner="Heads";
		
		
	}
		
	
	render(){
	
	  let styles = {background:"blue",};
	  const history=this.state.history;
	  const moves =history.map((step,move)=>{
			return (
				    <div className="result" style={styles}>{history[this.state.history.length-move]}</div>
			);

		});

	  return(
		<div className="game" >
		  {this.state.isHidden && <Wheel onClick={(i) => this.handleClick(i)} callbackFromParent={this.myCallback}/> }
		  {this.state.isHidden && <Triangle/> }
		  {/*<div className="status" onClick={() => this.handleClick()} >{this.state.winner}</div>*/}
		  {/*<div className="square">{moves}</div>*/}

		  <button className="heck" onClick={this.toggleHidden.bind(this)} disabled={this.state.isHidden}>
                    Click for Wheel
                  </button>
                  <button className="heck" onClick={this.toggleHidden.bind(this)} disabled={!this.state.isHidden}>
                    Click for History
                  </button>
                  {/*<div className="status" onClick={() => this.handleClick()} >{this.state.winner}</div>*/}
                  {!this.state.isHidden &&  (<div className="square">{moves}</div>)}
		</div>	
		
	  );
	} 
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
