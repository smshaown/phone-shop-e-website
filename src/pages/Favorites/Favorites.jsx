import { useEffect, useState } from "react"
import FavoritesCard from "./FavoritesCard";


export const Favorites = () => {

  const [favorites, setFavorites] = useState([]);
  const [noFound, setFounds] = useState(false);

  const [isShow, setIsShow] = useState(false)
   const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if(favoriteItems){
      setFavorites(favoriteItems)

      const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      console.log(total);

      setTotalPrice(total)

    }else{
      // console.log('No data found')
      setFounds('No data found')
    }

  },[])

  const handleRemove  = () => {
    localStorage.clear();
    setFavorites([])
    setFounds("No Data Found")
  }



  return (
    <div className="container">
      {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : 
        <div>
          {favorites.length > 0 && <div>
            <button onClick={handleRemove} className="px-5 my-12 bg-green-200 block mx-auto">Deleted All Favorites</button>
            <h1>Total price : {totalPrice}</h1>
          </div>      
          }


          <div className="grid grid-cols-2 gap-5">
            {
                isShow ? favorites.map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  )) 
                  
                  : favorites.slice(0,2).map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))
            }
          </div>

          {favorites.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto my-12">
            {isShow ? "See less" : "See more"}
          </button>}


        </div>
      }
    </div>
  )
}
