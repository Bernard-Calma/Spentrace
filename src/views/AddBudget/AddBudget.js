import { StyleSheet, Text, View } from "react-native"

const AddBudget = () => {
    return(
        <View style = {styles.container}>
            <Text>Add Budget</Text>
        </View>
    )
}

export default AddBudget

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    }
})
