import React, { Component } from "react";
import "./Landing.css";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { FacebookButton, TwitterTweetButton, TumblrPostButton } from 'react-social-sharebuttons';
import { Input} from "../../components/Form";
import {Link } from 'react-router-dom';

class Landing  extends Component  {
	//		this.props.history.push(`/users/${id}`);

	state = {
		url: ""
	}

	componentDidMount(){
		this.getUrl()
	}
getUrl(){
	let url = window.location.search.split("=");
	const location = window.location.hostname + `/users/${url[1]}`;

	this.setState({url:location})
	console.log( this.state.url)
}

render() {

	return (
		<Container fluid>
        <div className="home">
			<Row>
				<Col size="md-12">
					<Jumbotron>
						<h1>Welcome to HikeUp</h1>
						<h3>A MeetUp app just for hiking 14'erS. You can pair up with one person or a group of people.</h3>
					</Jumbotron>
				</Col>
			</Row>
           
			<Row>
				<Col size="md-3"></Col>
				<Col size="md-6">
					<h3>Log in to get started</h3>
                    <Col size="md-2">

                    <Link className="btn homeBtn" to="/Dashboard" role="button">Click Here to Sign Up</Link>

                </Col>

					<Col size="md-2">

                        <Link className="btn  homeBtn" to="#" role="button">Click Here to Sign In</Link>

                </Col>
				</Col>
			</Row>
        
            </div>

		</Container>
	);
}}
export default Landing;
