import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice } from "./favorites-slice";
import { FavoritesSlice } from "./favorites-slice/favorites-slice.types";
import { createRecipesSlice } from "./recipe-slice/recipe-slice";
import { RecipesSlice } from "./recipe-slice/recipe-slice.types";

export const UseAppStore = create<RecipesSlice & FavoritesSlice>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
  }))
);
