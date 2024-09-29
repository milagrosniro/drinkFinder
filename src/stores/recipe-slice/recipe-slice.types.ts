import { z } from "zod"
import { categoriesApiResponseSchema, DrinkApiResponsesSchema, DrinksApiResponsesSchema, RecipeAPIResponseSchema, SearchFilterSchema } from "../../utils/recipes-schema"


export type Categories = z.infer<typeof categoriesApiResponseSchema>

export type RecipesSlice = {
categories: Categories,
drinks: Drinks,
recipeSelected: Recipe,
modal: boolean,
closeModal: () => void,
fetchCategories: () => Promise<void>,
searchRecipes: (value : SearchFilter) => Promise<void>,
selectRecipe: (value : Drink['idDrink']) => Promise<void>,
}

export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponsesSchema>
export type Drink = z.infer<typeof DrinkApiResponsesSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
