import {Component, PureComponent} from 'react'
import './App.css';
import Todo from './components/Todo';

class App extends PureComponent {
  
  constructor(props) {
    super(props)
    this.onAdd = this.onAdd.bind(this)
    this.state = {
      todos: [{title: 'Go to shop'}],
      show: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(state, props)
    return {
      ...state, ...props
    };
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   console.log("shouldComponentUpdate", prevState, this.state)
  //   return (this.state.show !== prevState.show || this.state.todos !== prevState.todos)
  // }

  // state = {
  //   todos: [{title: 'Go to shop'}]
  // }

  onChange = (value, index) => {
    // this.setState({
    //   name: event.target.value
    // }, () => {
    //   console.log('Callback', this.state)
    // })
    // this.state.name = event.target.value AR SHEIDZLEBA
    const todos = [...this.state.todos]
    todos[index].title = value
    this.setState({
      todos
    })
  }

  onAdd() {
    this.setState({
      todos: [...this.state.todos, {title: ''}]
    })
  }

  toggle = () => {
    this.setState((state) => ({
      show: !state.show
    }))
  }

  render() {
    console.log("RENDER", this.state)
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={() => this.setState({show: true})}>Show</button>
        {this.state.show && this.state.todos.map((todo, index) => (
          <Todo 
            key={index}
            title={todo.title} 
            onChange={(event) => this.onChange(event.target.value, index)} />
        ))}
        <button onClick={this.onAdd}>Add New</button>
      </div>
    )
  }

  // getSnapshotBeforeUpdate() {

  // }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }



  componentDidMount() {
    // console.log('componentDidMount')
  }
}

export default App;
