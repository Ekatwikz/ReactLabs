import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        margin: 20,
        fontSize: 18,
    },

    mediumContent: {
        margin: 5,
        fontSize: 15,
    },

    smolContent: {
        margin: 5,
        fontSize: 10,
    },

    errContent: {
        color: "#f00",
        margin: 20,
        fontSize: 18,
    },

    smolErrContent: {
        color: "#f00",
        margin: 5,
        fontSize: 10,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export { styles }