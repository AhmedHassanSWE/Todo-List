import React, {Component} from 'react';
import './AddItem.css'

class AddItems extends Component {
    state = {
        task: '',
        year: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       if(e.target.task.value === '') {
           return false;
       } else if(e.target.year.value === '') {
           return false;
       } else{
        this.props.addItem(this.state)
        this.setState({
            task: '',
            year: ''
        })
       }
    }

  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter task...' id='task' onChange={this.handleChange} value={this.state.task} />
          <input type='number' placeholder='Enter year...' id='year' onChange={this.handleChange} value={this.state.year} />
          <input type='submit' value='Add' />
      </form>
    </div>
  );
}
}

export default AddItems;
