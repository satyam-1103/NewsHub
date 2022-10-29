import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    return (
      <div className="my-3">
        <Card>
          <Card.Img variant="top" src={this.props.imageURL} alt="Card Image" />
          <Card.Header>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Link href={this.props.newsURL} target="_blank">
              Read more
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsItem;
