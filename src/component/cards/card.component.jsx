import React from "react";

import "./card.component.styles.css";
import DwayneJohnson from "./Dwayne-Johnson.png";
import TomCruise from "./tom-cruse.png";
import shahrukh from "./shah-rukh-khan-.jpg";
import fivestar from "./fivestar.jpg";

export const Card = (props) => {
  return (
    <div className="container">
      <div className="card1card2card3Container">
        <div className="card1card2Container">
          <div className="card1">
            <p>
              I have been solving all the project ideas on roadmap.sh and i am
              surprised how far i have come from where i started.
              <div className="word">Highly Recommended!</div>
            </p>
          </div>

          <div className="card2">
            <img
              className="image1"
              src={TomCruise}
              alt="junior-developer"
            ></img>
            <div className="image-detail">
              <h2>Artem Jones </h2>
              <p>Junior Fontend Developer</p>
            </div>
          </div>
        </div>

        <div className="card3">
          <p>
            Since starting my career in 2021, I have only followed one resource,
            roadmap.sh, it truly helped me go from 0 to having and changing the
            financial trajectory of my family
          </p>
          <div className="image">
            <img className="image2" src={shahrukh} alt="junior-developer"></img>
            <div className="image-detail-card3">
              <h1>Artem Jones </h1>
              <p>Junior Fontend Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card4card5Container">
        <div className="card4">
          <img className="image3" src={DwayneJohnson}></img>
        </div>

        <div className="card5">
          <p>⭐️⭐️⭐️⭐️⭐️</p>

          <h1>Jackie Mackle </h1>
          <p>Engineering Manager</p>
          <p className="manager">
            I find myself recommending roadmap.sh to all the internees or junior
            developers. It's a great way to skill up and grow in your career.
          </p>
        </div>
      </div>

      <div className="card6">
        <p>
          roadmap.sh is an incredible resource. i was fortunate to discover it
          during my university days in 2018. Back then,it was just a single
          repository with three images. It's amazing to see how much impact it
          has had on millons of lives since then.
        </p>
        <div className="last-items">
          <p className="opening-bracket">͔</p>
          <img className="imageblur" src={TomCruise}></img>
          <img className="image1" src={TomCruise}></img>
          <img className="imageblur" src={TomCruise}></img>
          <p className="closing-bracket"> ͕</p>
        </div>

        <h1 className="last-name">Artem Jones </h1>
      </div>
    </div>
  );
};
