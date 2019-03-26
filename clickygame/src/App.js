import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import ClickPic from './components/ClickPic';
import pics from './pics.json'

class App extends React.Component {  
  state={
    picArray: pics,
    curScore: 0,
    topScore: 0,
    alreadyClicked: [],
    lossMsg: ""
  } 

  gameOver = () => {
    this.setState({
      curScore: 0,
      alreadyClicked: [],
      lossMsg: "Sorry, you lost. Click Another to try again!"
    })
    if(this.state.curScore > this.state.topScore){
      this.setState({
        topScore: this.state.curScore
      })
    }
  }
  
  handleClick = (id) =>{
    if(this.state.alreadyClicked.length === 0){
      this.setState({
        alreadyClicked: [...this.state.alreadyClicked, id],
        lossMsg: ""
      });
      this.scoreIncrement(this.state.curScore); 
      this.doShuffle(this.state.picArray);
    }else{
      let check = this.findDuplicate(id, this.state.alreadyClicked)      

      if(!check){
        this.setState({
          alreadyClicked: [...this.state.alreadyClicked, id],
          lossMsg: ""
        });
        this.scoreIncrement(this.state.curScore); 
        this.doShuffle(this.state.picArray);       
      }else{
        this.gameOver();
      }
    }

  };

  doShuffle = (array) =>{
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  scoreIncrement = (cs) =>{
    cs+=1;
    this.setState({
      curScore: cs
    })
  };

  findDuplicate = (id,array) => {
    for(let z=0;z<array.length;z++){
      let zzz = array[z]
      if(zzz === id){
        return true
      }
    }
    
    return false;
  };

  render(){    
    return (
      <div>
        <Navbar 
          currentScore = {this.state.curScore}
          topScore = {this.state.topScore}
        />
        <Jumbotron />
        <Wrapper>
          <h3 className="lossMsg">{this.state.lossMsg}</h3>
          {
            this.state.picArray.map(
              pic => <ClickPic 
                id = {pic.id}
                key = {pic.id}
                imgLink = {pic.image}
                clickHandler = {this.handleClick}
                alreadyClicked = {this.alreadyClicked}
              />
            )
          }
        </Wrapper>
      </div>
    );  
  }
}

export default App;
