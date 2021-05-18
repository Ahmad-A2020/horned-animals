import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  
  constructor (props) {

    super (props);
    this.state={
      dataarray:Data,
      show: false,
      item: {},      
    }
  }

  increment=(nam)=>{
    let updatedArray=this.state.dataarray.map( elemnt =>{
      if (elemnt.title==nam){
        if (elemnt.hasOwnProperty('votes')){
          elemnt.votes++;
        }else{
          elemnt.votes=1;     
        } 
      }
      return elemnt;
    }) ;
    this.setState({dataarray:updatedArray});

    
  }
  showInModal= (clickedBeast)=>{

    let targetArray=this.state.dataarray.find(item => item.title==clickedBeast)
    this.setState({
      show: true,
      item: targetArray,
    })

  }
  hideInModal=()=>{
    this.setState({
      show:false,
    })
  }

  render() {
    return (
      <div>  []
               
        <Header/>
        <Main BeastArray={this.state.dataarray} increment={this.increment} showInModal={this.showInModal}  />
        <SelectedBeast title={this.state.item.title } show={this.state.show}
          hide={this.state.hideInModal} description={this.state.item.description} image={this.state.item.image_url}
          item={this.state.item} handleClick={this.showInModal} votes={this.state.item.votes} handleClick={this.hideInModal} />
        <Footer/>
                
      </div>
    )
  }

}

export default App;
