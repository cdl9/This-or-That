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
		this.setState( {degree:this.state.degree+totalDegree, status: (this.state.degree/360 - Math.trunc(this.state.degree/360)) >= .50 ? "TAILS":"HEADS"});				
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
			<div className = "status">
                		{(this.state.degree/360 - Math.trunc(this.state.degree/360)) >= .50 ? "TAILS":"HEADS"}
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
	   this.state={winner: "Tails", history:[], color:"blue",};
	}
	handleClick(){
		const winner="Heads";
		const history=this.state.history;

		

		this.setState({
			history:history.concat(winner),
			winner:winner,
			color:"blue"
		});
	}
		
	
	render(){
	
	  let styles = {background:"blue",};
	  const history=this.state.history;
	  const moves =history.map((step,move)=>{
			return (
				    <div className="result" style={styles}>{history[this.state.history.length-1]}</div>
			);

		});

	  return(
		<div className="game" >
		  <Wheel/>
		  <Triangle/>
		  {/*<div className="status" onClick={() => this.handleClick()} >{this.state.winner}</div>*/}
		   {/*<div className="square">{moves}</div>	*/}
		</div>	
		
	  );
	} 
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
