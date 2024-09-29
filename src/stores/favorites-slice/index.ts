import { StateCreator } from "zustand";
import { Recipe } from "../recipe-slice/recipe-slice.types";
import { FavoritesSlice } from "./favorites-slice.types";

export const createFavoritesSlice : StateCreator<FavoritesSlice> = ((set, get) => ({
favorites: [],
addFavourite: (recipe: Recipe) => {
    console.log(recipe)
    const favorites = get().favorites
    const recipeIsAdded = favorites.find((elem)=> elem.idDrink === recipe.idDrink)
    if(!recipeIsAdded){
        set((state)=>({favorites: [...state.favorites, recipe]}))
    }
},
deleteFavourite: (id: Recipe['idDrink']) => {
    const favorites = get().favorites;
    const uploadedFavorites = favorites.filter((fav)=> fav.idDrink !== id )
    console.log(id)
    set((state)=>({favorites: uploadedFavorites}))
}

}))