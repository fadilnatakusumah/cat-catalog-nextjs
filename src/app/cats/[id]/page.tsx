"use client";
import { BASE_URL } from "@/api/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import { faker } from "@faker-js/faker";
import "./page.scss";

function DetailCat() {
  const { id } = useParams();
  const [catName, setCatName] = useState("");
  const [catPrice, setCatPrice] = useState(0);

  useEffect(() => {
    setCatName(faker.animal.cat());
    setCatPrice(faker.number.int({ min: 1, max: 100 }));
  }, []);

  return (
    <div className="cat-detail-wrapper">
      <div className="cat-detail-content">
        <div className="cat-detail--preview">
          {/* <Image width={400} height={200} src={`${BASE_URL}/cat/${id}`} alt="" /> */}
          <img src={`${BASE_URL}/cat/${id}`} alt="" />
        </div>
        <div className="cat-detail--informations">
          <div className="cat-detail--informations-wrapper">
            <div className="cat-detail--name">{catName}</div>
            <div className="cat-detail--price">${catPrice}</div>

            <p className="cat-detail--description">
              Tempor irure laboris voluptate ut sit voluptate incididunt esse.
              Cupidatat minim officia ad nulla consectetur.Labore in et occaecat
              est aute esse exercitation voluptate fugiat cupidatat.
            </p>
          </div>

          <div className="cat-detail--buttons">
            <Button>Buy the cat</Button>
            <Button outline>Save to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCat;
