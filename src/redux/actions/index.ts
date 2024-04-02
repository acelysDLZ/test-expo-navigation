import { ActionData } from "../../types"
import { ADD_RECIPES, SELECTED_RECIPE } from "./actionsType"

export const addRecipes = (data: any) : ActionData => ({
    type: ADD_RECIPES,
    payload: {
        data
    }
})

export const selectedRecipe = (data: any) : ActionData => ({
    type: SELECTED_RECIPE,
    payload: {
        data
    }
})