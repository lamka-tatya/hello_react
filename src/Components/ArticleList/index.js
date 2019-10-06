import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component{

	state = {
		openArticleIndex:null
	}

	render() {
		const articleElements = this.props.articles.map((a, index) => 
			<li className='article-list__li' key = {a.id}>
				<Article 
					article = {a} /*defaultIsOpen = {index === 0}*/ 
					isOpen={a.id === this.state.openArticleIndex}
					onButtonClick = {this.handleClick.bind(this, a.id)}
				/>
			</li>)

		return (<ul>
			{articleElements}
		</ul>
		)
	}

	handleClick = (id) => {
		this.setState({
			openArticleIndex: (id === this.state.openArticleIndex) ? null : id
		})
	}
}
