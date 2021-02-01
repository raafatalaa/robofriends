import React ,{Component} from 'react'; 

class ErrorBoundray extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError:false
		};
	}

	componentDidCatch(error,info){
		this.setState({hasError:true})
	}

	render(){
		if(this.state.hasError){
			return <h1>ohhhhh no  there is an error</h1>
		}
		else {
			return this.props.children
		}
	}
}
export default ErrorBoundray;