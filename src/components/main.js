import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
import Form from 'react-bootstrap/Form'
import {CardColumns} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'



class main extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    update=(event)=>{
        event.preventDefault();
        let value=event.target.value;
        this.props.filterHorned(value);
    }
  
    render(){
        return(
            <>
                <Form >                   
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Number of Horned </Form.Label>
                        <Form.Control as="select" onChange={this.update} >
                        <option value='all'>All</option>
                        <option value='1'>one</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>One Hunderd</option>
                        </Form.Control>
                    </Form.Group>     
                    <br></br>
                </Form>

                <div style={{display:'flex',flexFlow:'row', flexWrap:'wrap', padding:'100px'}}>
                   
                    {this.props.BeastArray.map((item,index)=>{
                            
                                return(
                                    <HornedBeasts
                                    HornedBeastsTitle={item.title}
                                    HornedBeastsImage={item.image_url}
                                    HornedBeastsDescription={item.description}
                                    key={index}
                                    increment2={this.props.increment}
                                    showInModal={this.props.showInModal}
                                    
                                    />
                                );
                            
                        
                           
                        })
                    
                    }
                
                   
                </div>
            </>
        );
    }
}
export default main;

 