import React from "react";
import Item from "types";

const ItemCard: React.FC<{
  item: Item;
  handleNavigate: (url: string) => void;
}> = ({ item, handleNavigate }) => {
  return (
    <div
      className="relative group w-64 h-64 bg-white rounded-lg border border-gray-200"
      key={item.id}
    >
      <img
        className="absolute rounded-lg w-max h-max group-hover:opacity-20 transition duration-150 ease-in-out"
        src={item.imageUrls[0].url}
        alt={item.name}
      />
      <div className=" absolute pt-2 pb-4 px-3 opacity-0 group-hover:opacity-100 w-max h-64 transition duration-150 ease-in-out">
        <p className="text-lg h-7">{item.name}</p>
        <div className="grid grid-cols-1 gap-1 py-3 w-56 text-sm font-semibold text-gray-500 ">
          {item.variants.map((v, i) => {
            if (i > 3) return null;
            return (
              <p className="truncate" key={v.id}>
                Item {i + 1} -{" "}
                <span className="font-semibold text-gray-700">{v.name}</span>
              </p>
            );
          })}
          {item.variants.length > 4 && (
            <p>... plus {item.variants.length - 4} more</p>
          )}
        </div>
        <button
          onClick={() => handleNavigate(`../${item.id}`)}
          className="absolute bottom-4 left-3 w-56 rounded-md uppercase h-12 bg-green-500 hover:bg-green-700 text-white text-sm font-bold opacity-100 transition-colors duration-75 ease-in-out"
        >
          Select
        </button>
      </div>
      <div className="w-full text-center pt-64">
        <span className="font-bold text-sm text-gray-700">{item.name}</span>
      </div>
    </div>
  );
};

export default ItemCard;
