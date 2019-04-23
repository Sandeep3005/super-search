import React, { Component } from "react";
import SpinLoader from "../UI/SpinLoader/SpinLoader";
import axios from "axios";
import * as _ from "underscore";
const URL_FOR_ID = "https://www.superheroapi.com/api.php/2321022374616314/";
const URL_FOR_NAME =
  "https://www.superheroapi.com/api.php/2321022374616314/search/";
import HeroList from "./../HeroList/HeroList";

interface MyProps {
  superHeroId: string | number;
}

interface MyState {
  response: any;
  fetchById: boolean;
}
export class SuperHeroInfo extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { response: null, fetchById: false };
  }

  isFetchById = () => {
    const { superHeroId } = this.props;
    if (typeof +superHeroId === "number" && superHeroId > 0) return true;
    return false;
  };

  componentDidUpdate(prevProps: any) {
    const { superHeroId: prevSuperHeroId } = prevProps;
    const { superHeroId } = this.props;
    if (prevSuperHeroId !== superHeroId) {
      this.setState({
        response: null
      });
      this.fetchSuperHeroInfo();
    }
  }

  fetchSuperHeroInfo() {
    const { superHeroId } = this.props;
    const heroUrl = this.getCorrectUrl();
    axios.get(`${heroUrl}${superHeroId}`).then(response => {
      this.setState({
        response: response.data
      });
    });
  }

  getCorrectUrl = () => {
    return this.isFetchById() ? URL_FOR_ID : URL_FOR_NAME;
  };

  showLoader = () => {
    const { response } = this.state;
    return response ? false : true;
  };

  render() {
    return (
      <div>
        {this.showLoader() ? (
          <SpinLoader loaderWidth="10rem" loaderHeight="10rem" />
        ) : (
          <HeroList
            heroData={this.state.response}
            usingHeroId={this.isFetchById()}
          />
        )}
      </div>
    );
  }
}

export default SuperHeroInfo;
