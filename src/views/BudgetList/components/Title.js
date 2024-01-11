import { StyleSheet, Text, View } from "react-native";

const Title = () => {
    return(
        <View style = {styles.titleContainer}>
            <Text>Due Date</Text>
            <Text>Account Name</Text>
            <Text>Amount</Text>
            <Text>Type</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})