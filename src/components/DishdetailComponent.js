import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class Dishdetail extends Component {
    constructor (props) {
        super(props)
    }

    renderDish(dish) {        
        return (
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )      
    }

    renderComments(comments) { 
        let commentList = comments.map((comment) => {
            return (
                <ul className="list-unstyled">
                    <li>{`-- ${comment.author}, ${comment.date}`}</li> 
                    <li>{`${comment.comment}`}</li>
                </ul>               
            )
        } ) 
        return ( comments &&   
            <div className="col-12 col-md-5 mt-1">
                <h4>Comments</h4>
                {commentList}
            </div>
        )   
    }    

    render() {       
        return( this.props.dish &&
            <div  className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}
            </div>            
        )    
    }
}

export default Dishdetail