import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItem/AddItem'
class App extends Component {
  state = {
    items: [

      
    ]
  }

  deleteItems = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
  return (
    <div className="App container">
      <h1 className='text-center'>Todo list</h1>
      <TodoItems items={this.state.items} deleteItems={this.deleteItems} />
      <AddItems addItem={this.addItem} />
    </div>
  );
}
}

export default App;
