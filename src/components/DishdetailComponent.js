import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {

        super(props);
        console.log('Menu compoment is invoked')
    }

    componentDidMount(){
        console.log('Did mounted is invoked')

    }

    renderDish(dish){
        if (dish != null){
           return (
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            
           ); 
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){

        if (dish != null){

            var listComments = dish.comments.map((d) => 

            <div>
                <p key={d.id}>{d.comment}</p>
                <p key={d.id}>-- {d.author}, {d.date}</p>
            </div>

            );

            return (
            
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {listComments}
                </ul>
            </div>
          
            )
           
         }
         else {
             return(
                 <div></div>
             );
         }
     }

    


    render() {
        return (
            
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish)}
            </div>
            

        );
    }


}

export default Dishdetail;