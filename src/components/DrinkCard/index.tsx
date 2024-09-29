import { Drink } from "../../stores/recipe-slice/recipe-slice.types";
import { UseAppStore } from "../../stores/useAppStore";
import { IDrinkCardProps } from "./drinkCard.types";

const DrinkCard = ({drink}: IDrinkCardProps) => {

  const { selectRecipe} = UseAppStore();

  const {idDrink,strDrink,strDrinkThumb} = drink;

  const handleClick = (id : Drink['idDrink']) =>{
    selectRecipe(id)
  }

  return (
    <div className="border shadow-lg">
      <div className=" overflow-hidden">

        <img alt={`drink-img-${strDrink}`} src={strDrinkThumb} className=" hover:scale-125 transition-transform hover:rotate-2"/>
      </div>
      <div className="p-5">
      <h2 className=" text-2xl truncate font-black">{strDrink}</h2>
      <button 
      type="button"
      className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
      onClick={()=>handleClick(idDrink)}>
        View Recipes

      </button>

      </div>

    </div>
  )
}

export default DrinkCard