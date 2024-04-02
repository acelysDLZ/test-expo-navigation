import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useFetchRecipes } from '../api/recipes/useFetchRecipes';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getRecipesList } from '../redux/selectors';
import VerticalLine from '../components/VerticalLine';
import { RecipeItem } from '../types';
import { globalStyle } from '../styles';
import { AppBar } from '@react-native-material/core';

const RecipeTile = ({item, navigation} : {item : RecipeItem, navigation : any}) => (
    <TouchableOpacity style={styles.recipeItem} onPress={() => {
        navigation.navigate("RecipeDetail", {item});
    }}>
        <Image source={{uri: item.image}} style={styles.recipeImage}/>
        <VerticalLine/>
        <Text style={styles.recipeText}>{item.title}</Text>
    </TouchableOpacity>
)

const RecipesList = ({navigation}:any) => {
    const { getAllRecipes } = useFetchRecipes();

    const allRecipes : RecipeItem[] = useSelector(getRecipesList);

    // Lorsque le tableau est vide, useEffect n'est appelé qu'une seule fois à la création de l'écran
    useEffect(() => {
        getAllRecipes();
    },[])


    return (
        <SafeAreaView style={globalStyle.androidSafeArea}>
            <AppBar title="Liste des recettes"/>
            <FlatList 
                data={allRecipes}
                renderItem={({item}) => <RecipeTile item={item} navigation={navigation} />}
                keyExtractor={item => item.id.toString()}
                />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    recipeItem:{
        flexDirection:"row",
        borderColor:'black',
        borderWidth:2,
        alignItems:'center'
    },
    recipeImage:{
        height:50,
        width:"30%"
    },
    recipeText:{
        fontSize:18,
        fontWeight:'500',
        width:"70%"
    }
});

export default RecipesList;