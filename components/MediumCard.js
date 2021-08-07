import React from "react";
import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80 lg:h-60 lg:w-60">
        <Image className="rounded-lg " src={img} layout="fill" />
      </div>
      <h2 className="text-2xl mt-3">{title}</h2>
    </div>
  );
};

export default MediumCard;
