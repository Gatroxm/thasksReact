import React, { Component } from 'react';




import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class Tasks extends Component{
    constructor() {
        super();
    }
    eliminatarea (index){
        this.props.eliminar(index)
    }
    render(){
        const todos = this.props.Tasks.map( (todo, i) => {
            return(
                <Col lg="4" className="mb-4" key={i}>
                    <Card>
                        <Card.Header>{todo.titulo} <br /><span className="badge badge-danger">{todo.prioridad}</span></Card.Header>                                
                        <Card.Body>
                            
                            <Card.Text>
                                <p>{todo.descripcion} </p>
                                <mark>{todo.responsable} </mark>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="danger" onClick={this.eliminatarea.bind(this, i)}>Eliminar</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            )
        });
        return(
            <Row>
                { todos }
            </Row>     
        )
    };

}

export default Tasks;