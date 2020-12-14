import React, { Component } from 'react'
import '../styles/App.css'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      items: []
    }

    this.inputChange = this.inputChange.bind(this)
    this.submit = this.submit.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.checkTask = this.checkTask.bind(this)
  }

  inputChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    if (this.state.input !== '') {
      this.setState({
        input: this.state.input,
        items: [...this.state.items, this.state.input]
      })
    } else {
      alert('Write you taskt')
    }
  }

  deleteTask(e) {
    e.target.parentNode.remove()
  }

  checkTask(e) {
    e.target.parentElement.classList.toggle('_checked')
  }

  render() {
    return (
      <div className="ToDoList Component">
        <form onSubmit={this.submit}>
          <input className={'text__input'} value={this.state.input} onChange={this.inputChange} />
          <button type="submit">&#43; Add</button>
        </form>

        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}><input type="checkbox" onClick={this.checkTask} /> {item} <button onClick={this.deleteTask}>&#215; Delete</button></li>
          ))}
        </ul>
      </div>
    )
  }
}
