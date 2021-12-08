import React, { useState } from "react";
import {
  TOTAL_SCREEN,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtilis";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return (
      TOTAL_SCREEN.map((screen, i) => (
        <div
          key={screen.screen_name}
          className={getHeaderOptionsClass(i)}
          onClick={() => switchScreen(i, screen)}>
          <span>{screen.screen_name}</span>
        </div>
      ))
    )
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option ";
        if (index < TOTAL_SCREEN.length - 1) classes += "header-option-seperator ";

        if (selectedScreen === index) classes += "selected-header-option ";

        return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;
    
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
};

return (
        
  <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
  >
      <div className="header-parent">
          <div
              className="header-hamburger"
              onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
              <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
              <h1 className="text-logo">Cristian Barriento</h1>
          </div>
          <div
              className={
                  showHeaderOptions
                      ? "header-options show-hamburger-options"
                      : "header-options"
              }
          >
              {getHeaderOptions()}
          </div>
      </div>
  </div>
);
}
