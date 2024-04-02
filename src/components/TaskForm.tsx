import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const TaskForm = ({onAddTask} : any) => {

    const [newTitle, setNewTitle] = useState("");

    const onChangeText = (value : string) => {
        setNewTitle(value);
    }

    const onAddNewTask = () => {
        if(newTitle === "") return;
        onAddTask(newTitle);
        setNewTitle("");
    }

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input} 
            onChangeText={(e) => {
                onChangeText(e);
            }} 
            value={newTitle}
            placeholder=' Nouvelle tâche'/>
            <View style={{flex:0.1}}/>
            <Button buttonColor='blue' textColor='white' style={styles.button} onPress={onAddNewTask}>
                <Text style={{fontSize: 16}}>Ajouter</Text>
            </Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        minHeight: 50,
        paddingHorizontal: 10
    },
    input: {
        flex: 0.8,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    button:{
        flex: 0.2,
        justifyContent: 'center'
    }
})

export default TaskForm;