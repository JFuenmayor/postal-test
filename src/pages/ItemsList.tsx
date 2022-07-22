import { ItemCard } from "components";
import useFetchData from "hooks/useFetchData";
import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "types";

const ItemsList: React.FC = () => {
  const data = useFetchData<Array<Item>>("http://localhost:3001/items");
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-8 gap-y-14">
      {data &&
        data.map((item) => (
          <ItemCard key={item.id} item={item} handleNavigate={navigate} />
        ))}
    </div>
  );
};

export default ItemsList;

//@TODO
//[] Enhance position: absolute hell (button not clickable,
//weird behavour of visuals, item name under card not optimized 'pt-64')
//[]Suspense loading of images stack for better UX

//Questions
//Why img url is under array, will it be mobile?
