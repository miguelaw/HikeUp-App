import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "../../components/DropdownBtn/DropdownBtn.css";


class Mountains extends Component {
  state = {
    mountains: [],
    mtranges: "",
    fourteeners: ""
  };

  componentDidMount() {
    this.loadMountains();
  }

  loadMountains = () => {
    API.getMountains()
      .then(res =>
        this.setState({ mountains: res.data, mtranges: "", fourteeners: ""})
      )
      .catch(err => console.log(err));
  };

  deleteMountain = id => {
    API.deleteMountain(id)
      .then(res => this.loadMountains())
      .catch(err => console.log(err));
  };

  handleInputChange = mountain => {
    const { name, value } = mountain.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = mountain => {
    mountain.preventDefault();
    if (this.state.mtranges && this.state.fourteeners) {
      API.saveMountain({
        mtranges: this.state.mtranges,
        fourteeners: this.state.fourteeners
      })
        .then(res => this.loadMountains())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>14er List</h1>
            </Jumbotron>
            {this.state.mountains.length ? (
              <List>
                {this.state.mountains.map(mountain => (
                  <ListItem key={mountain._id}>
                    <Link to={"/mountains/" + mountain._id}>
                      <strong>
                        Mountain Range: {mountain.mtranges} <br /> 14ner: {mountain.fourteeners}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMountain(mountain._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Mountains;
