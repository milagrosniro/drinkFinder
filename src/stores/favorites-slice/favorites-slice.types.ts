import { Recipe } from '../recipe-slice/recipe-slice.types'

export type FavoritesSlice = {
    favorites : Recipe[],
    addFavourite : (recipe: Recipe) => void,
    deleteFavourite: (id: Recipe['idDrink']) => void,
    loadFromStorage: () => void
}