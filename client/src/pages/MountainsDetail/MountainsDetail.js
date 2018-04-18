import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class MountainsDetail extends Component {
  state = {
    mountain: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getMountain(this.props.match.params.id)
      .then(res => this.setState({ mountain: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.mountain.mtranges} by {this.state.mountain.fourteeners} to  {this.state.mountain.fourteeners}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details for the Event</h1>
              
            <p>
                <h3>{this.state.mountain.mtranges}</h3>
                {this.state.mountain.fourteeners}
                where: {this.state.mountain.fourteeners}
                When: {this.state.mountain.date} at  {this.state.mountain.time} 
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/mountains">← Back to Mountain List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MountainsDetail;
