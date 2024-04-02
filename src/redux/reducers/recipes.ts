import { RecipeItem } from "../../types";
import { ADD_RECIPES, SELECTED_RECIPE } from "../actions/actionsType";

type TRecipeList = {
    recipesList : RecipeItem[],
    selectedRecipe: RecipeItem
}

type TAction = {
    type: string,
    payload: { 
        data: any
    }
}

const initialState : TRecipeList = {
    recipesList: [],
    selectedRecipe: {
        id: 0,
        image: "",
        imageType: "",
        title: ""
    }
}

export const recipes = (state: TRecipeList = initialState, action: TAction) => {
    switch(action.type){
        case ADD_RECIPES:
            const addRecipesState = {
                selectedRecipe: state.selectedRecipe,
                recipesList: [...state.recipesList, ...action.payload.data]
            }
            return addRecipesState;
        case SELECTED_RECIPE:
            const selectedRecipeState = {
                recipesList: state.recipesList,
                selectedRecipe: action.payload.data
            }
            return selectedRecipeState;
        default:
            return state;
    }
}