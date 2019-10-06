import React, {Component} from 'react';
import ArticleList from './ArticleList'
import articles from '../fixtures.js'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component{
	state = {
		reverted:false
	}

	articles_ = articles.slice()

	render(){
		console.log(this.state)
		return(
			<div className='container'>
					<div className='jumbotron'>  
						<h1 className='display-3'>
							My app 
							<button className='btn' onClick={this.revertList}>Revert</button>
						</h1>
					</div>
					<ArticleList articles={this.state.reverted ? this.articles_.slice().reverse() : this.articles_}/>
			</div>
		)
	}

	revertList = () => {
		console.log('%c revert list called', 'color:red')
		
		this.setState({
			reverted: !this.state.reverted
		})
	}
}

export default App