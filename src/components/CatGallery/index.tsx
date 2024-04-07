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

async function CatsGallery() {
  const response = await ApiRequest.getCats({ limit: 6, skip: 3 });

  return (
    <div className="cats-gallery-wrapper">
      <div className="cats-gallery-content">
        <div>
          <h2>Cats Gallery</h2>
          <p>
            Minim ex ipsum amet ut excepteur. Mollit deserunt voluptate id
            occaecat ex aliqua sint magna reprehenderit incididunt magna sint
            proident ex. Veniam cillum sit nulla anim sunt et ipsum aliquip
            irure mollit laboris deserunt et.
          </p>
        </div>

        <div className="cats-gallery-grid">
          {response?.map((cat: Cat) => (
            <div key={cat._id}>
              <img
                // width={200}
                // height={400}
                src={`${BASE_URL}/cat/${cat._id}`}
                alt={cat._id}
              />
            </div>
          ))}
          {/* <div>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CatsGallery;
