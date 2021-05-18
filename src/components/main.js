import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';

class main extends React.Component{

    


  
    render(){
        return(
            <CardColumns>
                <div >
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
            </CardColumns>
        );
    }
}
export default main;

 