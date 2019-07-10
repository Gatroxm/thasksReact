import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class AddTasks extends Component{

    constructor(){
        super();
        this.state = {
            titulo : '',
            responsable : '',
            descripcion : '',
            prioridad : 'Low'
        };
        this.handelInput = this.handelInput.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelInput(e){
        const { value, name } = e.target; 
        this.setState({
            [name] : value
        });
    }
    handelSubmit(e){
        e.preventDefault();
        this.props.AddTodos(this.state);
    }
    render(){
        return(
            <Card>
                <Card.Header>Agregar Nueva tarea</Card.Header> 
                <Card.Body>
                    <Form onSubmit={this.handelSubmit}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="titulo" name="titulo" onChange={ this.handelInput }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="responsable" name="responsable" onChange={ this.handelInput }/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="descripcion" name="descripcion" onChange={ this.handelInput }/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control as="select" name="prioridad" onChange={ this.handelInput }>
                            <option>prioridad</option>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </Form.Control>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Crear tarea
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    };

}

export default AddTasks;