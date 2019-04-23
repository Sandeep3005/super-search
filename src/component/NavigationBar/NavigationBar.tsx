import React, { Component } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

export class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          expand="lg"
          className={styles.NavContainer}
        >
          <Navbar.Brand href="" className={styles.Brand}>
            Super Search
          </Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}

export default NavigationBar;
