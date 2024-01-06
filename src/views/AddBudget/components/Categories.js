import { StyleSheet, Text, View } from "react-native"

const Categories = (props) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{props.name}</Text>
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingLeft: 10,
        height: 40,
        // borderWidth: 1,
        // borderColor: "red",
    },
    text: {
        fontFamily: "firaCode",
        fontSize: 16
    }
})