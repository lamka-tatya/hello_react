import React, {PureComponent} from 'react';

class Article extends PureComponent{
    // constructor(props){
    //     super(props)

    //     this.state={
    //         isOpen: true
    //     }
    // }

    state={
		//isOpen:this.props.defaultIsOpen,
		clickCount:0
    }

    render(){
        const {article, isOpen, onButtonClick} = this.props
    
        const body = isOpen && <section className='card-text'>{article.text}</section>
        return(
            <div className='card mx-auto' style={{width:'50%'}}>
                <div className='card-header'>
                <h2 onClick={this.handleClick}>{article.title} 
                    <button className='btn btn-primary btn-lg float-right' onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
					</button>
					<div>{this.state.clickCount} clicks</div>
                </h2>
                </div>
                <div className='card-body'>
                    <h6 className='card-subtitled text-muted'>
                        Creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                
                </div>
            </div>
        )
	}
	
	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.defaultIsOpen !== this.props.defaultIsOpen){
	// 		this.setState({
	// 			isOpen: nextProps.defaultIsOpen
	// 		})
	// 	}
	// }

	// shouldComponentUpdate(nextProps, nextState){
	// 	return this.props.defaultIsOpen !== nextProps.defaultIsOpen
	// }

    handleClick = () => {
        this.setState({
			//isOpen: !this.state.isOpen,
			clickCount: this.state.clickCount + 1
        })
    }
}


export default Article

// function Article(props){
//     const {article} = props
//     const body = <section>{article.text}</section>
//         return(
//         <div>
//           <h2>{article.title}
//           <button onClick={handleClick}>close</button>
//           </h2>
//           {body}
//           <h3>{article.date}</h3>
//           </div>
//       );
//   }

