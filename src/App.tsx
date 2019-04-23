import React, { Component } from "react";
import SuperSearchBar from "./component/SuperSearchBar/SuperSearchBar";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import SuperHeroInfo from "./component/SuperHeroInfo/SuperHeroInfo";
import { Form, Col } from "react-bootstrap";

import "./App.css";

type MyState = { heroId: string | number };
class App extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      heroId: ""
    };
  }
  searchValueHandler = (heroId: any) => {
    console.log("heroId = ", heroId);
    this.setState({ heroId });
  };
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Form>
          <Form.Row>
            <Col md={1} />
            <Col>
              <SuperSearchBar handleSearchValue={this.searchValueHandler} />
              <SuperHeroInfo superHeroId={this.state.heroId} />
            </Col>
            <Col md={1} />
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default App;
