/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import "./index.scss";

function Card({ brand, name, isNew, colors, designerName, price }: any) {
  return (
    <div className="card-wrapper">
      <div>
        <div className="card-brand">Nike</div>
        <div className="card-shoe-name">NMD City Sock 2</div>

        <div className="card-image-wrapper">
          <img
            src={
              "https://scrapingant.com/blog/assets/images/sneakers-scraping-api-5fb2a889e304e356965047c739b2b316.jpg"
            }
          />
        </div>

        <div className="card-designer-wrapper">
          <div>Designer</div>
          <div>
            <span>Kith Unvell</span>
            <span>$130</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
