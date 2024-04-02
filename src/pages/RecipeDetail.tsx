import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { RecipeItem } from '../types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedRecipe } from '../redux/selectors';
import { useFetchRecipes } from '../api/recipes/useFetchRecipes';
import { globalStyle } from '../styles';
import { HtmlText } from '@e-mine/react-native-html-text';

const RecipeDetail = ({route}:any) => {
    const {item} : {item : RecipeItem} = route.params;
    const { getRecipeById } = useFetchRecipes();

    const recipe = useSelector(getSelectedRecipe);
    useEffect(() => {
        getRecipeById(item.id)
    }, [])

    return (
        <SafeAreaView style={[styles.container, globalStyle.androidSafeArea]}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Image source={{uri: recipe.image}} style={styles.recipeImage}/>
            <Text style={styles.score}>Nombre de likes : {recipe.aggregateLikes} </Text>
            <HtmlText>{recipe.summary}</HtmlText>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize:24,
        fontWeight:'500',
        textAlign:'center'
    },
    recipeImage:{
        height:"20%",
        width:"100%"
    },
    score:{
        fontSize: 20,
        marginVertical:10
    }
});

export default RecipeDetail;