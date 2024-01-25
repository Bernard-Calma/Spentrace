import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { TextValue } from "./components";
import { useSelector } from "react-redux";

const ViewBudget = () =>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const { budgetView } = useSelector(store => store.view)
    const {
        dueDate,
        accountName,
        amount,
        type
    } = budgetView;

    const handleDelete = () => {
        Alert.alert("Delete", "Are you sure you weant to delete?",
        [{
            text: "No",
            style: "cancel"
        },
        {
            text: "Yes",
            onPress: () => console.log("Deleted: ", budgetView)
        }]
        )
    }
    return(
        <View style = {styles.viewBudgetContainer}>
            <TextValue 
                name = {"Date"}
                value = {months[dueDate.month - 1] + " " + dueDate.day}
            />
            <TextValue 
                name = {"Name"}
                value = {accountName}
            />
            <TextValue 
                name = {"Amount"}
                value = {amount}
            />
            <TextValue 
                name = {"Type"}
                value = {type === 0 ? "Expense" : "Income"}
            />
            <TouchableHighlight
                onPress={() => handleDelete()} 
                style={styles.deleteContainer}
            >
                <Text styles = {styles.deleteText}>Delete</Text>
            </TouchableHighlight>
            
        </View>
    )
}


export default ViewBudget;

const styles = StyleSheet.create({
    viewBudgetContainer: {
        height: 400,
        justifyContent: "space-around",
        // borderColor: "green", 
        // borderWidth: 1,
    },
    deleteContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: "30%",
        width: 60,
        height: 60,
        alignSelf: "center",
    },
    deleteText: {
        color: "white"
    }
})
