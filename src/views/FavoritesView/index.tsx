import { useMemo } from "react";
import DrinkCard from "../../components/DrinkCard";
import { UseAppStore } from "../../stores/useAppStore";

const FavoritesView = () => {

  const {favorites} = UseAppStore();
  const hasFavorites = useMemo(()=>favorites.length,[favorites])
  return (
    <div>
      
      <h1 className=" text-6xl font-extrabold">Favorites</h1>
      {
        hasFavorites ? 
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        {favorites.map(drink => <DrinkCard  key={drink.idDrink} drink={drink}/>)}
      </div>
        :
        <p className=" my-10 text-center text-2xl"> No Favorites yer</p>
      }
      </div>
  )
}

export default FavoritesView