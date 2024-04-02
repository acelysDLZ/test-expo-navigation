import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipes, selectedRecipe } from "../../redux/actions";
// const { getAllRecipes } = useFetchRecipes()

const BASE_API_URL : string = process.env.EXPO_PUBLIC_SPOONACULAR_BASE_API_URL ?? "";
const API_KEY : string = process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY ?? "";
const NUMBER = 30;

export const useFetchRecipes = () => {
    const dispatch = useDispatch();

    const getAllRecipes = async () => {
        try
        {
            const response = await axios.get(`${BASE_API_URL}/complexSearch`, {
                params: 
                {
                apiKey: API_KEY,
                number: NUMBER
                }
            });
            dispatch(addRecipes(response.data.results));
        }
        catch(e)
        {
            console.error(e);
        }
    }

    const getRecipeById = async (id : number) => {
        try
        {
            const response = await axios.get(`${BASE_API_URL}/${id}/information`, {
                params: {
                    apiKey:API_KEY
                }
            });
            dispatch(selectedRecipe(response.data));
        }
        catch(e)
        {
            console.error(e);
        }
    }

    return {
        getAllRecipes,
        getRecipeById
    };

}