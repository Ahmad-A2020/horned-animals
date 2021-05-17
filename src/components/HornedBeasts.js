import React from 'react';
class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <h2> {this.props.HornedBeastsTitle}</h2>
                {/* <div data-src={this.props.HornedBeastsImage}>
                </div> */}
                <img src={this.props.HornedBeastsImage} alt="image"/> 
                      
                <p> 
                    {this.props.HornedBeastsDescription}
                </p>
    
            </div>
        )
    }
}
export default HornedBeasts;