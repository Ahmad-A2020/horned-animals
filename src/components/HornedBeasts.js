import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state={
            votesNo:0,           
        }
    }
    counterFunction=()=>{
        this.setState({
            votesNo:this.state.votesNo+1            
        });
        this.props.increment2(this.props.HornedBeastsTitle);
    }
    showInModal=()=>{
        this.props.showInModal(this.props.HornedBeastsTitle);
    }
    render(){
        return(
            <div >
                {/* <h2> {this.props.HornedBeastsTitle}</h2>
                
                <img src={this.props.HornedBeastsImage} alt="image"/> 
                      
                <p> 
                    {this.props.HornedBeastsDescription}
                </p> */}

                <Card style={{ width: '18rem' } }>
                    <Card.Img variant="top" src={this.props.HornedBeastsImage} onClick={this.showInModal} />
                    <Card.Body>
                        <Card.Title>{this.props.HornedBeastsTitle}</Card.Title>
                        <Card.Text>
                        {this.props.HornedBeastsDescription}
                        
                        </Card.Text>
                        <Card.Text>
                        💓  Number Of votes: {this.state.votesNo}                        
                        </Card.Text>
                        <Button variant="primary" onClick={this.counterFunction} >Vote</Button>
                        

                    </Card.Body>
                </Card>
    
            </div>
        )
    }
}
export default HornedBeasts;