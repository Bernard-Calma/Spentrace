import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { TextValue } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { deleteBudget } from "../../features/budgetSlice";
import { AntDesign } from '@expo/vector-icons';
import { changeView } from "../../features/viewSlice";

const ViewBudget = () =>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dispatch = useDispatch();
    const { budgetView } = useSelector(store => store.view)
    const {
        dueDate,
        accountName,
        amount,
        type
    } = budgetView;

    // console.log(dueDate.toLocaleString())

    const handleDelete = () => {
        Alert.alert("Delete", "Are you sure you weant to delete?",
        [{
            text: "No",
            style: "cancel"
        },
        {
            text: "Yes",
            onPress: () => {
                dispatch(deleteBudget(budgetView))
                dispatch(changeView("Budget"))
            }
        }]
        )
    }
    return(
        <View style = {styles.viewBudgetContainer}>
        <TextInput style={styles.headerTitle} editable={false}>{accountName}</TextInput>
            <TextValue 
                name = {"Date"}
                value = {`${months[dueDate.getMonth()].slice(0,3)} ${dueDate.getDate()} ${dueDate.getFullYear()}` || ""}
            />
            <TextValue 
                name = {"Amount"}
                value = {`$${parseInt(amount).toFixed(2)}`}
            />
            <TextValue 
                name = {"Type"}
                value = {type === 0 ? "Income" : "Expense"}
            />
            <TouchableHighlight
                onPress={() => handleDelete()} 
                style={styles.deleteContainer}
            >
            <AntDesign name="delete" size={30} color="red" />
            </TouchableHighlight>
        </View>
    )
}


export default ViewBudget;

const styles = StyleSheet.create({
    viewBudgetContainer: {
        width: 350,
        // display: "flex",
        // justifyContent: "space-around",
        borderColor: "#B0B7C4", 
        borderWidth: 3,
        borderRadius: 20
    },
    deleteContainer: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        // borderRadius: 10,
        alignSelf: "center",
    },
    headerTitle: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        borderBottomWidth: 3,
        borderColor: "rgb(208,255,0)"
    }
})
