import axios from "axios"
import { Drink, SearchFilter } from "../stores/recipe-slice/recipe-slice.types"
import { categoriesApiResponseSchema, DrinksApiResponsesSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema"

const BASE_URL = import.meta.env.VITE_URL_API

export const getCategories = async () =>{
    const url = `${BASE_URL}list.php?c=list`
    const {data} = await axios(url)
    const result = categoriesApiResponseSchema.safeParse(data)
    if(result.success){
       return result.data
    }
    
}

export const getRecipes = async (filters : SearchFilter) =>{
    // const BASE_URL = import.meta.env.VITE_URL_API
    const {category,ingredient} = filters
    const url = `${BASE_URL}filter.php?c=${category}&i=${ingredient}`
    const {data} = await axios(url)
    const result = DrinksApiResponsesSchema.safeParse(data)
    if(result.success){
       return result.data
    }
    
}

export const getRecipeSelected = async(id: Drink['idDrink']) =>{
const url = `${BASE_URL}lookup.php?i=${id}`
const {data} = await axios(url)

const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])

if(result.success){
    return result.data
 }
}