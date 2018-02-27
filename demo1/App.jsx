import React from 'react';

class App extends React.Component{
	render(){
		var i = 1;
		var myStyle ={
			fontSize : 100,
			color:'#F00'
		}
	return (
	<div>
			<h1>Header</h1>
            <h2 style={myStyle}>Content</h2>
				<p data-myattribute = "somevalue">This is the content!!!</p>
					{ 1+1 }
						<p></p>
					{ 2+4 }
				<br/>
			<h1>{ i ==1 ? 'True!!!':'False:('}</h1>
	</div>
	);
	}
}
export default App;
	