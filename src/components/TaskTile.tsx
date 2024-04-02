import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Task } from '../types';
import { Spacer } from '@react-native-material/core';

const TaskTile = ({task, onUpdateTask, onDeleteTask}:{task : Task, onUpdateTask : any, onDeleteTask : any}) => {

    const onChangeStatus = () => {onUpdateTask(task.id)}

    const onDeleteClicked = () => {onDeleteTask(task.id)}

    return (
        <View style={styles.container}>
            <Pressable onPress={onChangeStatus}>
                {task.isCompleted 
                    ? <Image style={[styles.checkSize, styles.checked]} source={require("../../assets/images/checked.png")}/>
                    : <Image style={styles.checkSize} source={require("../../assets/images/unchecked.png")}/>}
            </Pressable>
            <Text style={styles.title}>{task.title}</Text>
            <Spacer/>
            <Pressable onPress={onDeleteClicked}>
                <Image style={styles.checkSize} source={require("../../assets/images/delete.png")}/>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        paddingLeft: 25,
        fontSize: 16
    },
    checked: {
        tintColor: '#00FF00'
    },
    checkSize: {
        height: 26,
        width: 26
    }
})

export default TaskTile;