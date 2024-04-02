import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem, TextInput } from 'react-native';
import { Card, Divider, FAB } from 'react-native-paper';
import { Task } from '../types';
import TaskTile from '../components/TaskTile';
import TaskForm from '../components/TaskForm';
import Counter from '../components/Counter';


const TasksList = ({props}:any) => {

    const date = new Date();

    const [tasks, setTasks] = useState<Task[]>([
        {id: 0, title:"Hello World", isCompleted: false},
    ]);

    const [isFormVisible, setIsFormVisible] = useState(true);


    const renderItem = ({item} : {item : Task}) => (
        <TaskTile onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} task={item}/>
    );

    const onAddTask = (title : string) => {
        setTasks([...tasks, { id: Date.now(), title : title, isCompleted : false}]);
    }

    const onUpdateTask = (taskId : number) => {
        var updatedTasks : Task[] = [];
        for(var t of tasks)
        {
            if(t.id === taskId)
            {
                updatedTasks.push({id:taskId, title:t.title, isCompleted: !t.isCompleted})
            }
            else
            {
                updatedTasks.push(t);
            }
        }
        setTasks(updatedTasks);
    }

    const onDeleteTask = (taskId : number) => {
        var updatedTasks : Task[] = [];
        for(var t of tasks)
        {
            if(t.id !== taskId)
            {
                updatedTasks.push(t);
            }
        }
        setTasks(updatedTasks);
    }

    
    return (
        <View style={styles.card}>
            <Card>
                <Card.Title title={date.toLocaleDateString('fr-FR', {year : 'numeric', month:'long', day:"numeric"})}/>
                {isFormVisible && <TaskForm onAddTask={onAddTask}/>}
                <View style={styles.counterRow}>
                    <Counter nb={tasks.length} title='Taches totales'/>
                    <Counter nb={tasks.filter((x) => x.isCompleted === true).length} title='Taches complétées'/>
                </View>
                <Divider/>
                <Card.Content>
                    <FlatList 
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}/>
                </Card.Content>
            </Card>
            <FAB style={styles.fab} icon="plus"
                onPress={() => {
                    setIsFormVisible(!isFormVisible);
                }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        padding: 25
    },
    fab: {
        position: "absolute",
        borderRadius: 50,
        margin: 16,
        bottom: 0,
        right: 0
    },
    counterRow: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 10
    }
})

export default TasksList;