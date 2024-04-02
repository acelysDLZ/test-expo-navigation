import { View, StyleSheet } from 'react-native';

const VerticalLine = () => {
    return (
        <View style={styles.verticalLine}/>
    )
};

const styles = StyleSheet.create({
    verticalLine:{
        height: '100%',
        width: 1,
        backgroundColor: "#909090"
    }
});

export default VerticalLine;