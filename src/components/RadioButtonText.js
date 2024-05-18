import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBudgetToAdd } from "../features/budgetSlice";

const RadioButtonText = (props) => {
    const dispatch = useDispatch();
    const {
        type
    } = useSelector(store => store.budget.budgetToAdd)

    const {
        names,
        selectedRadio,
        setSelectedRadio
    } = props;

    const handleChangeRadio = (index) => {
        dispatch(setBudgetToAdd({name: "type", value: index}))
        setSelectedRadio(index);
    }



    return(
        <>
        {
            names?.map((name, index) => 
                <TouchableOpacity 
                    key = {index}
                    style = {styles.radioContainer} 
                    onPress={() => handleChangeRadio(index)}>
                        <View style={styles.radioButton}>
                            <View style={selectedRadio == index && styles.radioButtonInnerSelected}></View>
                        </View>
                    <Text style ={styles.radioButtonText}>{name}</Text>
                </TouchableOpacity>
            )
        }
        </>
        
    )
}

export default RadioButtonText;

const styles = StyleSheet.create({
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
        backgroundColor: "black",
    },
    radioButtonText: {
        textTransform: "capitalize"
    }
})