import { useMemo } from "react";
import DrinkCard from "../../components/DrinkCard";
import { UseAppStore } from "../../stores/useAppStore";

const IndexView = () => {
  const {drinks} = UseAppStore();
  const hasDrinks = useMemo(()=>drinks.drinks.length,[drinks])

  return (
    <>
    <h1 className=" text-6xl font-extrabold">Recipes</h1>
    {
      hasDrinks ? 
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      {drinks.drinks.map(drink => <DrinkCard key={drink.idDrink} drink={drink}
      />)}
      </div> : 
      <p className=" my-10 text-center text-2xl">No Results yet. Please use the form to search for recipes</p>
    }
    </>
  )
}

export default IndexView