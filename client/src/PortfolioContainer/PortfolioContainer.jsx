import React from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtilis";
import "./PortfolioContainer.css";
import FooterContainer from "../PortfolioContainer/Footer/FooterContainer";

export default function PortfolioContainer() {
  const mapAllScreen = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return (
    <div className="portfolio-container">
      {mapAllScreen()}
      <FooterContainer />
    </div>
  );
}
