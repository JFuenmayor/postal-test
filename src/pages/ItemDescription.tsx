import { VariantCard } from "components";
import useFetchData from "hooks/useFetchData";
import { useParams } from "react-router-dom";
import Item from "types";

const ItemDescription = () => {
  const { id } = useParams<{ id?: string }>();
  const data = useFetchData<Item>(`http://localhost:3001/items/${id}`);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-14">
      <div className="grid place-items-center lg:border-none border border-solid border-gray-100 ">
        <img
          alt={data?.name}
          src={data?.imageUrls[0].url}
          className="max-w-fill h-auto place-self-start justify-self-center "
        />
      </div>
      <div className="lg:col-span-2">
        <span className="text-lg font-semibold">{data?.name}</span>
        <p className="pt-4 text-gray-700">{data?.description}</p>
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
          {data?.variants.map((variant) => (
            <VariantCard key={variant.id} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
