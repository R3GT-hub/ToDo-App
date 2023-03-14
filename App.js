import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  

  addItem(todoValue){
    if(todoValue!==""){
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list=[...this.state.list];
      list.push(newItem); 

      this.setState({
        list:list,
        newItem:"",
      });
    }
  }

  deleteItem(id){
    const list=[...this.state.list];
    const updatedlist=list.filter(item=>item.id!=id);
    this.setState({
      list:updatedlist,
      
    });
  }
//this method is like onchange method in codewith harry textutils project
  updateInput(input){
    this.setState({newItem:input});
  }
  render(){
    return(
        <div>
          <img src={logo} width="200" height="200" className="logo"/>
          <h1 className="app-title">Saransh's ToDo App</h1>
          <div className="container">
            Add an Item...
            <br/>
            <input type="text" className='input-text' placeholder='write a ToDo' required value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)}/>
            <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)}>Add ToDo</button>
            <div className="list">
              <ul>
                {this.state.list.map(item=>{
                  return(
                    <li key={item.id}>
                     <p><input type="checkbox" name="isDone" defaultChecked={item.isDone} onChange={()=>{}}/>
                    {item.value}</p>
                    <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                    </li>
                  );
                })}
                {/* <li>
                  <p><input type="checkbox" name="" id="" />Record Youtube Videos</p>
                  <button className="btn">Delete</button>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      );
  }
}

export default App;