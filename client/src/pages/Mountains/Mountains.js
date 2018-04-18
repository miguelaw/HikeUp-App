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
    mtsinfo: [],
    mtranges: "",
    fourteeners: "",
    elevation: "",
    lat: "",
    lon: "",
    weather: ""
  };


  componentDidMount() {
    this.loadMtsInfo();
  }

  loadMtsInfo = () => {
    API.getMtsInfo()
      .then(res =>
        this.setState({ mtsinfo: res.data, mtranges: "", fourteeners: "", elevation: "", lat: "",lon: "", weather: ""})
      )
      .catch(err => console.log(err));
  };

  deleteMtInfo = id => {
    API.deleteMtInfo(id)
      .then(res => this.loadMtsInfo())
      .catch(err => console.log(err));
  };

  handleInputChange = mtinfo => {
    const { name, value } = mtinfo.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = mtinfo => {
    mtinfo.preventDefault();
    if (this.state.mtranges && this.state.fourteeners) {
      API.saveMtInfo({
        mtranges: this.state.mtranges,
        fourteeners: this.state.fourteeners,
        elevation: this.state.elevation,
        lat: this.state.lat,
        lon: this.state.lon,
        weather: this.state.weather
      })
        .then(res => this.loadMtsInfo())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>14ers List</h1>
            </Jumbotron>
            {this.state.mtsinfo.length ? (
              <List>
                {this.state.mtsinfo.map(mtinfo => (
                  <ListItem key={mtinfo._id}>
                   
                      <strong>
                        Mountain Range: {mtinfo.mtranges} <br /> 
                        14ner: {mtinfo.fourteeners} <br />
                      </strong>
                      <Link to={"/mtsinfo/" + mtinfo._id}>More Details
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMtInfo(mtinfo._id)} />
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
