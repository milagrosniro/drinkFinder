import { StateCreator } from "zustand";
import { Recipe, RecipesSlice } from "../recipe-slice/recipe-slice.types";
import { FavoritesSlice } from "./favorites-slice.types";

export const createFavoritesSlice : StateCreator<FavoritesSlice & RecipesSlice, [], [], FavoritesSlice> = ((set, get) => ({
favorites: [],
addFavourite: (recipe: Recipe) => {
    const favorites = get().favorites
    const recipeIsAdded = favorites.find((elem)=> elem.idDrink === recipe.idDrink)
    if(!recipeIsAdded){
        set((state)=>({favorites: [...state.favorites, recipe]}))
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
    // createRecipesSlice(set,get,api).closeModal()
},
deleteFavourite: (id: Recipe['idDrink']) => {
    const favorites = get().favorites;
    const uploadedFavorites = favorites.filter((fav)=> fav.idDrink !== id )
    console.log(id)
    set(()=>({favorites: uploadedFavorites}))
},
loadFromStorage : () => {
    const favorites = localStorage.getItem('favorites')

    if(favorites) set(()=>({favorites: JSON.parse(favorites)}))
}

}))