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
      dataarray:Data
    }
  }
  render() {
    return (
      <div>  
               
        <Header/>
        <Main BeastArray={this.state.dataarray}/>
        {/* <SelectedBeast/> */}
        <Footer/>


        
      </div>
    )
  }

}

export default App;
