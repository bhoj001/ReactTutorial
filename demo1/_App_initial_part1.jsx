import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// window.React = React;
// window.ReactDOM = ReactDOM;
//this is a stateless call to the components
class App extends React.Component{
	render(){
		var i = 1;
		var myStyle ={
			fontSize : 100,
			color:'#F00'
		}
	return (
	<div>
			{/* <h1>Header h1</h1>
            <h2 style={myStyle}>Content h2 </h2>
				<p data-myattribute = "somevalue">This is the content!!!</p>
					{ 1+1 }
						<p></p>
					{ 2+4 }
				<br/>
			<h1>{ i ==1 ? 'True!!!':'False:('}</h1> */}
			{ /*  this is a stateless call */ }
			<Header/>
			<Content/>
	</div>
	
	);
	}
}
class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>Header1</h1>
			</div>
		);
	}
}
class Content extends React.Component{
	render(){
		return(
			<div>
				<h2>Content1</h2>
			</div>
		);
	}
}
class AppStateFul extends React.Component{
	constructor(){
		super();
		this.state={
			data:[
				{
					"id":1,
					"name":"bhoj",
					"age":27
				},
				{
					"id":2,
					"name":"manoj",
					"age":29
				},
				{
					"id":3,
					"name":"ravi",
					"age":26
				}
				
			]
		}
	}

	
	render(){
		return(
			<div>
				<Header/>
				<table>
					<tbody>
						{this.state.data.map((person,i)=><TableRow key={i}
						data={person} />)}
					</tbody>
				</table>
			</div>
		);
	}
}
class TableRow extends React.Component{
	render(){
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>

		);
	}
}

//one container component that will keep the state for all of them
class AppContainer extends React.Component{
	constructor(props){
	super(props);
	this.state={
		Header:"This is a header 3..... ",
		Content:"This is a content 3..... "
	}
	}
	render(){
		return(
			<div>
			<h1>{this.state.Header}</h1>
			<h1>{this.state.Content}</h1>
		</div>
		);
	}
}

//chapter:Props overview
class AppProps extends React.Component{
	render(){
		return(
		<div>
			<h1>{this.props.headerProps}</h1>
			<h2>{this.props.contentProps}</h2>
		</div>
		);
	}
}

//defaultProps in react
class AppDefault extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.headerProp}</h1>
				<h2>{this.props.contentProp}</h2>
			</div>
		);
	}
}
AppDefault.defaultProps = {
	headerProp: "Header default from props...",
	contentProp:"Content default from props..."
 }

//state and props combined
class StatePropsCombine extends React.Component{
	constructor(){
		super();
		this.state={
			header:"StatePropsCombined header...",
			content:"StatePropsCombined content..."
		}
	   
	}//close of constructor
	render(){
		return(
			<div>
				<StatePropsCombineHeader header_Prop={this.state.header} />
				<StatePropsCombineContent content_Prop={this.state.content} />
			</div>
		);
	}
}
class StatePropsCombineHeader extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.header_Prop}</h1>
			</div>
		);

	}
}
class StatePropsCombineContent extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.content_Prop}</h1>
			</div>
		);

	}
}
//endof state and props combined

//--props validation
class AppPropValidation extends React.Component{
	render(){
		return(
			<div>
				<h1>hellow, {this.props.name}</h1>
				<h2>number, {this.props.propNumber}</h2>
				<h3>function , {this.props.propFunc(3)}</h3>
				<h4>array,{this.props.propArray}</h4>
				<h5>bool, {this.props.propBool?"True...":"False..." }</h5>
				<h6>string, {this.props.propString}</h6>
			</div>
		);
	}
}

AppPropValidation.propTypes={
	name:PropTypes.string,
	propNumber:PropTypes.number,
	propBool:PropTypes.bool.isRequired,
	propFunc:PropTypes.func,
	propString:PropTypes.string,
	propArray:PropTypes.array.isRequired,
}

AppPropValidation.defaultProps={
   name: 'Nishant karki',
   propArray: [1, 2, 3, 4, 5],
   propBool: true,
   propFunc: function(e) {
      return e
   },
   propNumber: 1,
   propString: "String value..."
}


class AppSetStateHandler extends React.Component{
	constructor(){
		super();
		this.state={
		data:[]
		}
		//--this one is for setUpdate()
		// this.setStateHandler = this.setStateHandler.bind(this);
		//--This is for forceUpdateHandler
		//this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		//--For findDOMNode
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	};
	//--setState() handler
	setStateHandler(){
		var item = "setState...";
		var myArray = this.state.data.slice();
			myArray.push(item);
		this.setState({data:myArray});//this is a setState() function
	}
	//--for forceUpdate() handler
	forceUpdateHandler(){
		this.forceUpdate();
	}

	//--For find DOM node
	findDomNodeHandler(){
		var elementDIv = document.getElementById('myDiv');
		ReactDOM.findDOMNode(elementDIv).style.color='blue';
	}
	render(){
		return(
			<div>
				
				{/* <button onClick={this.setStateHandler}>SET STATE :)</button>
				<h4>state array: {this.state.data}</h4> */}

				{/* <button onClick={this.forceUpdateHandler}>FORCE UPDATE :)</button>
				<h4>Random number:{Math.random()}</h4> */}


				<button onClick={this.findDomNodeHandler}>Find DOM Node :)</button>
				<div id='myDiv'>Random color</div>
			</div>
		);
	}
}


//This is form handling in Reactjs

class AppFormsExample extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
		   data: 'Initial data...'
		}
		this.updateState = this.updateState.bind(this);
	 }
	 updateState(e) {
		this.setState({data: e.target.value});
	 }
	 render() {
		return (
		   <div>
			  <input type = "text" value = { this.state.data } onChange = { this.updateState } />
			  <h4>{ this.state.data }</h4>
		   </div>
		);
	 }
}

class AppEvents extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data_value : "Initial state...."
		}
		this.updateState = this.updateState.bind(this);

	}
	updateState(){
		this.setState({data_value :"Updated data after clicking using onclick event..."});
	}

	render(){
		return(
			<div>
			{/* <button onClick={this.updateState}>CLICK WOO</button>
			<h4>{this.state.data_value}</h4> */}

			<AppEventsChildToUpdateParent  myDataProp = {this.state.data_value} myUpdateStateProp = {this.updateState} ></AppEventsChildToUpdateParent>
			</div>

		);
	}

}
class AppEventsChildToUpdateParent extends React.Component{
	render(){
	  return(
		  <div>
			  <button onClick = {this.props.myUpdateStateProp} >ClickChild</button>
			  <h4>{this.props.myDataProp}</h4>
		  </div>
	  );
	}
}

class AppRefsExample extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data_value1 : "Initial state...."
		}
		this.updateState = this.updateState.bind(this);
		this.clearInput = this.clearInput.bind(this);

	}
	updateState(e){
		this.setState({data_value1 :e.target.value});
	}
	clearInput(){
		this.setState({data_value1 :""});
		ReactDOM.findDOMNode(this.refs.myInput).focus();
	}
	render(){
		return(
			<div>
			    <input value={this.state.data_value1} onChange={this.updateState} refs="myInput" ></input>
				<button onClick={this.clearInput}>Clear</button>
				<h4>{this.state.data_value1}</h4>
			</div>
		);
	}
}

//ReactJS keys
class AppKeysExample extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[
				{
					component:"First component...",
					id:1
				},
				{
					component:"Second component...",
					id:66  //this is willingly made 66 to check ouput
				},
				{
					component:"Third component...",
					id:3
				}
			]
		}
	
	}
	
	render(){
		return(
			<div>
			   {this.state.data.map((dynamicComponent,i)=>
			   <KeysExampleContent keys={i} componentData={dynamicComponent} />)}
			</div>
		);
	}
}

class KeysExampleContent extends React.Component{
	render(){
		return(
			<div>
				<div>{this.props.componentData.component}</div>
				<div>{this.props.componentData.id}</div>
			</div>
		);
	}
}

//export twice can not be done instead we need to use module.exports 
//export default App;
//export default AppStateFul;
module.exports = {
    App: App,
	AppStateFul: AppStateFul,
	AppContainer:AppContainer,
	AppProps:AppProps,
	AppDefault:AppDefault,
	StatePropsCombine:StatePropsCombine,
	AppPropValidation:AppPropValidation,
	AppSetStateHandler:AppSetStateHandler,
	AppFormsExample:AppFormsExample,
	AppEvents:AppEvents,
	AppRefsExample:AppRefsExample,
	AppKeysExample:AppKeysExample,
}	