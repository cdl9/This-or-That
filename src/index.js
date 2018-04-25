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
		  <Wheel onClick={(i) => this.handleClick(i)} />
		  <Triangle/>
		</div>
	  );
	} 
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateCol(move){
	let col=1;
	for(let i=1; i<=move;i++){
		if(col===3)
			col=0;		
		col++;			
	}
	return col;
}

function calculateWinner(squares){
	const lines =[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	];

	for(let i=0;i<lines.length;i++){
		const [a,b,c]=lines[i];
		if(squares[a]&&squares[a]===squares[b] &&squares[a]===squares[c]) {
			return squares[a];
		}
	}
	return null;

}


