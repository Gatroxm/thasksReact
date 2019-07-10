import React, {Component} from 'react';
import './App.css';
import Navegacion from './components/nav/Navegacion';
import Tasks from './components/Tasks/Tasks';
import { todos } from './todos.json';
import AddTasks from './components/AddTasks/AddTasks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component {
	constructor(){
		super();
		this.state = {
				todos
		};
		this.handelAppTodo = this.handelAppTodo.bind(this);
		this.handelDanger = this.handelDanger.bind(this);
	}
	handelAppTodo( todo ){
		this.setState({
			todos: [...this.state.todos, todo]
		});
	}
	handelDanger(index){
        this.setState({
			todos: this.state.todos.filter( (e, i) => {
				return i !== index
			})
		});
    }
	render(){
		return (
			<div className="App">
				<Navegacion titulo='Tasks' cantidad={this.state.todos.length} />
				<Container className="py-4">
					<Row className="justify-content-md-center">
						<Col xs lg="4">
							<AddTasks AddTodos={this.handelAppTodo} />
						</Col>
						<Col xs lg="8">
							<Tasks Tasks={ this.state.todos } eliminar={this.handelDanger} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
