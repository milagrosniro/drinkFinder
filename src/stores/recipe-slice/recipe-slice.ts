import { StateCreator } from "zustand";
import { getCategories, getRecipes, getRecipeSelected } from "../../services/RecipeService";
import { Drink, Recipe, RecipesSlice, SearchFilter } from "./recipe-slice.types";

export const createRecipesSlice : StateCreator<RecipesSlice> = ((set) => ({
    categories: {drinks:[]},
    drinks: {drinks:[]},
    recipeSelected: {} as Recipe,
    modal: false,
    closeModal: ()=> {
      set(() => ({modal:false, recipeSelected: {} as Recipe}))
    } ,
    fetchCategories: async () => {
      const categories = await getCategories();
      set(()=> ({categories}))
    },
    searchRecipes : async (filters: SearchFilter)=>{
        const drinks = await getRecipes(filters);
        set(()=> ({drinks}))

    },
    selectRecipe: async (id: Drink['idDrink']) =>{
      const recipeSelected = await getRecipeSelected(id)
      set(()=>({recipeSelected}))
      set(()=>({modal: true}))
    }
}))