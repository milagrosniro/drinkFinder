import { StateCreator } from "zustand";
import { createNotificationsSlice } from "../notifications-slice";
import { NotificationsSlice } from "../notifications-slice/notifications-slice.types";
import { createRecipesSlice } from "../recipe-slice/recipe-slice";
import { Recipe, RecipesSlice } from "../recipe-slice/recipe-slice.types";
import { FavoritesSlice } from "./favorites-slice.types";

export const createFavoritesSlice : StateCreator<FavoritesSlice & RecipesSlice & NotificationsSlice, [], [], FavoritesSlice> = ((set, get,api) => ({
favorites: [],
addFavourite: (recipe: Recipe) => {  
    const favorites = get().favorites
    const recipeIsAdded = favorites.find((elem)=> elem.idDrink === recipe.idDrink)
    if(!recipeIsAdded){
        set((state)=>({favorites: [...state.favorites, recipe]}))
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
    createRecipesSlice(set,get,api).closeModal()
    createNotificationsSlice(set, get, api).showNotification({text: 'Recipe added to favorites', error: false})
},
deleteFavourite: (id: Recipe['idDrink']) => {
    const favorites = get().favorites;
    const uploadedFavorites = favorites.filter((fav)=> fav.idDrink !== id )
    set(()=>({favorites: uploadedFavorites}))
    createRecipesSlice(set,get,api).closeModal()
    createNotificationsSlice(set, get, api).showNotification({text: 'Recipe succefully deleted', error: false})


},
loadFromStorage : () => {
    const favorites = localStorage.getItem('favorites')

    if(favorites) set(()=>({favorites: JSON.parse(favorites)}))
}

}))