import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Teacher.css'

class Teacher extends React.Component {
  render() {
    return (
      <div className="Teacher">
        <Card>
          <Card.Header>Учитетль</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Предмет: {this.props.subject}
            </Card.Text>
            <Button variant="outline-success" href={"/time?id=" + this.props.id}>Выбрать время</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Teacher;