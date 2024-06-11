import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { DateText, RadioButtonText } from "../../../components"
import { useDispatch, useSelector } from "react-redux"
import { setBudgetToAdd } from "../../../features/budgetSlice"

const Categories = (props) =>{
    const dispatch = useDispatch();
    const {
        name,
        type
    } = props
    const {
        budgetToAdd
    } = useSelector(store => store.budget)

    const [selectedRadio, setSelectedRadio] = useState()

    const handleChangeBudgetToAdd = (key, value) => {
        dispatch(setBudgetToAdd({name: key, value: value}))
    }
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{name}</Text>
            {
                type === "amount" 
                ? <TextInput
                    style = {styles.numberInput}
                    inputMode="decimal"
                    maxLength={7}
                    clearButtonMode="while-editing"
                    textAlign="right"
                    placeholder="$0"
                    value = {budgetToAdd.amount.toString()}
                    onChange = {e => handleChangeBudgetToAdd("amount", e.nativeEvent.text)}
                />
                : type === "date"
                ? <DateText 
                    handleChangeBudgetToAdd = {handleChangeBudgetToAdd}
                />
                : type === "type"
                ? <View style={styles.choicesContainer}>
                    <RadioButtonText 
                        names = {["income","expense"]}
                        selectedRadio = {selectedRadio}
                        setSelectedRadio = {setSelectedRadio}
                    />
                </View>
                :<TextInput 
                    style = {styles.textInput}
                    inputMode="text"
                    textAlign="right"
                    value = {budgetToAdd.accountName}
                    onChange = {e => handleChangeBudgetToAdd("accountName", e.nativeEvent.text)}
                />
            }
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        // borderWidth: 1,
        // borderColor: "red",
    },
    text: {
        fontFamily: "FiraCode",
        fontSize: 16,
        color: "#B0B7C4"
    },
    textInput: {
        width: 130,
        fontSize: 16,
        color: "black",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white"
    },
    numberInput: {
        width: 130,
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white"
    },
    choicesContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        
    },
    radioContainer: {
        flexDirection: "row",
    },
    radioButton: {
        height: 15,
        width: 15,
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 5,
    },
    radioButtonInnerSelected: {
        height: 10,
        width: 10,
        margin: 1.5,
        borderRadius: 20,
        backgroundColor: "#B0B7C4",
    }
})