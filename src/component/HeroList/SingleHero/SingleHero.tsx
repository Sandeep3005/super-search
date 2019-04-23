import React, { Component } from "react";
import { Container, Row, Col, Figure, Tabs, Tab } from "react-bootstrap";
import Appearance from "./Appearance";

interface MyProps {
  heroData: any;
}
interface MyState {}
export class SingleHero extends Component<MyProps, MyState> {
  render() {
    const { image } = this.props.heroData;
    if (!image || !image.url) return <div>No data found</div>;
    return (
      <div style={{ marginTop: "1em" }}>
        <Container>
          <Row>
            <Col md="3">
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="Hero Image"
                  src={image.url}
                />
              </Figure>
            </Col>
            <Col md="9">
              <Tabs defaultActiveKey="appearance" id="uncontrolled-tab-example">
                <Tab eventKey="appearance" title="Appearance">
                  <Appearance heroData={this.props.heroData} />
                </Tab>
                <Tab eventKey="biography" title="Biography">
                  Biography
                </Tab>
                <Tab eventKey="powerstats" title="Power Info">
                  Contact
                </Tab>
                <Tab eventKey="work" title="Work">
                  Contact
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SingleHero;
