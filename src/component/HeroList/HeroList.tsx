import React, { Component } from "react";
import SingleHero from "./SingleHero/SingleHero";

interface MyProps {
  heroData: any;
  usingHeroId: boolean;
}
interface MyState {}
export class HeroList extends Component<MyProps, MyState> {
  tranformAptData = () => {
    let { usingHeroId, heroData } = this.props;
    if (usingHeroId) {
      heroData = [heroData];
    } else {
      heroData = heroData.results;
    }
    return heroData;
  };

  showSingleHero = () => {
    const heroData = this.tranformAptData();
    if (!heroData) return <span>No data found</span>;
    return heroData.map((data: any, index: number) => {
      return <SingleHero key={index} heroData={data} />;
    });
  };
  render() {
    return <div>{this.showSingleHero()}</div>;
  }
}

export default HeroList;
