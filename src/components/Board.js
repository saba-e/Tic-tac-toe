import React, { Component } from "react";
import Square from "./Square";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

export default class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Container style={{ textAlign: "center" }}>
        <Grid item xs={12}>
          <div className="btnm">
            <Button
              style={{
                height: "50px",
                marginTop: "10px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(0)}
            </Button>
            <Button
              style={{
                height: "50px",
                marginTop: "10px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(1)}
            </Button>

            <Button
              style={{
                height: "50px",
                marginTop: "10px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(2)}
            </Button>
          </div>
          <br></br>
          <div className="btnm">
            <Button
              style={{
                height: "50px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(3)}
            </Button>
            <Button
              style={{
                height: "50px",
                marginRight: "2px",
                marginTop: "3px",
                marginBottom: "3px",
              }}
            >
              {this.renderSquare(4)}
            </Button>

            <Button
              style={{
                height: "50px",
                marginRight: "2px",

                marginTop: "3px",
                marginBottom: "3px",
              }}
            >
              {this.renderSquare(5)}
            </Button>
          </div>
          <br></br>
          <div className="btnm">
            <Button
              style={{
                height: "50px",
                marginBottom: "10px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(6)}
            </Button>
            <Button
              style={{
                height: "50px",
                marginBottom: "10px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(7)}
            </Button>

            <Button
              style={{
                height: "50px",
                marginBottom: "10px",
                marginRight: "2px",
              }}
            >
              {this.renderSquare(8)}
            </Button>
          </div>
        </Grid>
      </Container>
    );
  }
}
