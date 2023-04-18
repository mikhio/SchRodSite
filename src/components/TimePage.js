import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

class TimePage extends React.Component {
  render() {
    return (
      <div className="TimePage">
        <Header />
        <Card className="teacher-info">
          <Card.Header>Учитель</Card.Header>
          <Card.Body>
            <Card.Title>Гук Никита Дмитриевич</Card.Title>
            <Card.Text className="teacher-info-text">Предмет: Физика</Card.Text>
            <Card.Text className="teacher-info-text">Email: guk.nd@sch2.teacher.ru</Card.Text>
          </Card.Body>
        </Card>
        <div className="TimeTable">
          <ButtonGroup className="TimeTable" vertical>
            <ButtonGroup>
              <Button className="tt-btn" variant="outline-dark">16:00</Button>
              <Button className="tt-btn" variant="outline-dark">16:30</Button>
              <Button className="tt-btn" variant="outline-dark">17:00</Button>
              <Button className="tt-btn" variant="outline-dark">17:30</Button>
              <Button className="tt-btn" variant="outline-dark">18:00</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button className="tt-btn" variant="outline-dark">18:30</Button>
              <Button className="tt-btn" variant="outline-dark">19:00</Button>
              <Button className="tt-btn" variant="outline-dark">19:30</Button>
              <Button className="tt-btn" variant="outline-dark">20:00</Button>
              <Button className="tt-btn" variant="outline-dark">20:30</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button className="tt-btn" variant="outline-dark">21:00</Button>
              <Button className="tt-btn" variant="outline-dark">21:30</Button>
              <Button className="tt-btn" variant="outline-dark">22:00</Button>
              <Button className="tt-btn" variant="outline-dark">22:30</Button>
              <Button className="tt-btn" variant="outline-dark">23:00</Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}


export default TimePage;