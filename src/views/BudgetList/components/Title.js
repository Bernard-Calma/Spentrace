import { StyleSheet, Text, View } from "react-native";

const Title = () => {
    return(
        <View style = {styles.titleContainer}>
            <Text style = {styles.titleText}>Due Date</Text>
            <Text style = {styles.titleText}>Name</Text>
            <Text style = {styles.titleText}>Amount</Text>
            <Text style = {styles.titleText}>Type</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderWidth: 2,
        borderColor: "black",
    },
    titleText: {
        fontSize: 16,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "black",
        flex: 1,
    }
})