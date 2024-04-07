import { ApiRequest, BASE_URL } from "@/api/utils";
import React from "react";
import { faker } from "@faker-js/faker";

import "./page.scss";
import Image from "next/image";
import { Cat } from "@/components/CatGallery";
import Link from "next/link";
import { usePathname } from "next/navigation";

// async function getCats() {
//   const response = await ApiRequest.getCats();
// }

async function Cats() {
  const response = await ApiRequest.getCats({ limit: 50 });

  return (
    <div className="featured-cats-wrapper">
      <div className="featured-cats-content">
        <div>
          <h2>Cats</h2>
        </div>

        <div className="featured-cats-grid">
          {response?.map((cat: Cat) => (
            <Link
              href={`/cats/${cat._id}`}
              className="feature-cats-grid--item"
              key={cat._id}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cats;
