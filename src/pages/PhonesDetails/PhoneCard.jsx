import { Link, json } from "react-router-dom";
import swal from "sweetalert";

export const PhoneCard = ({ phone }) => {
  const { id, phone_name, brand_name, rating, price, image } = phone || {};

  const handleAddToFavorites = () => {
    const addedFavoritesArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    //jokhon kisu nai tokhon e if vitor dhukba
    if (!favoriteItems) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      swal("Good job!", "Products added successfully!", "success");
    } else {
      const isExits = favoriteItems.find((phone) => phone.id === id);

      if (!isExits) {
        addedFavoritesArray.push(...favoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Good job!", "Products added successfully!", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }
    // localStorage.setItem('test',JSON.stringify([{name:"hasib"},{name:"ph"}]))
  };

  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={image} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            ${price}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {phone_name}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link to={`/phones/${id}`}>
          <button
            onClick={handleAddToFavorites}
            className="block w-full select-none rounded-lg bg-slate-500 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add To Favorites
          </button>
        </Link>
      </div>
    </div>
  );
};
