import { StyleSheet, Text, View } from "react-native"
import { Categories } from "./components"

const AddBudget = () => {
    return(
        <View style = {styles.container}>
            <Categories name = {"Account"}/>
            <Categories name = {"Amount"} type = {"amount"}/>
            <Categories name = {"Due date"}/>
            <Categories name = {"Category"}/>
        </View>
    )
}

export default AddBudget

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    }
})
