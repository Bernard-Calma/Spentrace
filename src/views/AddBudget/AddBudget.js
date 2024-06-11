import { StyleSheet, Text, View } from "react-native"
import { Categories } from "./components"

const AddBudget = () => {
    return(
        <View style = {styles.container}>
            <Categories name = {"Due date"} type = {"date"}/>
            <Categories name = {"Name"}/>
            <Categories name = {"Amount"} type = {"amount"}/>
            <Categories name = {"Type"} type = {"type"}/>
        </View>
    )
}

export default AddBudget

const styles = StyleSheet.create({
    container: {
        width: 350,
        borderColor: "#B0B7C4", 
        borderWidth: 3,
        borderRadius: 20
    }
})
