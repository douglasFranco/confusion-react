import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const RenderDish = ({ dish }) => {
  return (dish &&
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

const RenderComments = ({ comments }) => {
  console.log(comments)
  let commentList = comments.map((comment) => {
    return (
      <ul className="list-unstyled">
        <li>
          {`-- ${comment.author}, 
                    ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}
        </li>
        <li>{`${comment.comment}`}</li>
      </ul>
    )
  })
  return (comments &&
    <div className="col-12 col-md-5 mt-1">
      <h4>Comments</h4>
      {commentList}
    </div>
  )
}

const Dishdetail = (props) => {

  return (
    props.dish ?
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
      : null
  )
}

export default Dishdetail