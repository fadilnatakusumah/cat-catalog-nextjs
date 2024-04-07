import { ApiRequest, BASE_URL } from "@/api/utils";
import React from "react";
import { faker } from "@faker-js/faker";

import "./index.scss";
import Image from "next/image";

// async function getCats() {
//   const response = await ApiRequest.getCats();
// }

export interface Cat {
  _id: string;
  mimetype: Mimetype;
  size: number;
  tags: string[];
}

export enum Mimetype {
  ImageJPEG = "image/jpeg",
}

async function FeaturedCats() {
  const response = await ApiRequest.getCats({ limit: 3 });

  return (
    <div className="featured-cats-wrapper">
      <div className="featured-cats-content">
        <div>
          <h2>Featured Cats</h2>
          <p>
            Minim ex ipsum amet ut excepteur. Mollit deserunt voluptate id
            occaecat ex aliqua sint magna reprehenderit incididunt magna sint
            proident ex. Veniam cillum sit nulla anim sunt et ipsum aliquip
            irure mollit laboris deserunt et.
          </p>
        </div>

        <div className="featured-cats-grid">
          {response?.map((cat: Cat) => (
            <div className="feature-cats-grid--item" key={cat._id}>
              <div>
                <Image
                  width={300}
                  height={400}
                  src={`${BASE_URL}/cat/${cat._id}`}
                  alt={cat._id}
                />
              </div>
              <div>
                <div className="feature-cats-grid--name">
                  <div>{faker.animal.cat()}</div>
                  <div>
                    ${faker.number.int({ min: 1, max: 100 }).toFixed(2)}
                  </div>
                </div>
                <Image src="/catlogo.png" width={30} height={30} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCats;
