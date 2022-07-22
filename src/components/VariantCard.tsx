import React from "react";
import { Variant } from "types";

const VariantCard: React.FC<{ variant: Variant }> = ({ variant }) => {
  return (
    <div
      className="flex flex-col justify-between py-3 px-4 border border-solid border-gray-100 rounded-md"
      style={{ minHeight: "12rem" }}
    >
      <div>
        <span className="font-bold text-gray-800">{variant.name}</span>
        <p className="text-gray-500">{variant.description}</p>
      </div>
      <span className="pt-5 text-xl font-semibold text-green-600">
        $ {variant.price}.00
      </span>
    </div>
  );
};

export default VariantCard;
