"use client";

import { useState } from "react";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="image name"
        width={1000}
        height={1000}
        className="min-y-[300px]
        object-cover
        object-center"
      />
      <div className="flex ">
        {images.map((img, idx) => (
          <div className="p-2" key={idx} onClick={() => setCurrent(idx)}>
            <Image src={img} alt="img" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
