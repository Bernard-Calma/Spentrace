import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../features/viewSlice";

const Navigation = () => {
    const dispatch = useDispatch();
    const {view} = useSelector(store => store.view)
    const handleAddBudget = () => {
        dispatch(changeView("Add Budget"))
    }
    const handleBack = () => {
        dispatch(changeView("Budget"))
    }
    return(
        <View style={styles.title}>
            {/* Menu button */}
            {
                view === "Budget" ? <Text style = {styles.menu}> = </Text> 
                : <TouchableWithoutFeedback onPress={() => handleBack()}>
                    <Image 
                    source={require('../../../assets/icons/left-arrow.png')}
                    style={styles.back}
                />
                </TouchableWithoutFeedback>        
            }
            
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
            }}>{view}</Text>
            <TouchableWithoutFeedback onPress={() => handleAddBudget()}>
                <Text style={styles.addButton}>+</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Navigation;

const styles = StyleSheet.create({
    menu: {
        left: 20, 
        opacity: 0
    },
    back: {
        left: 20,
        height: 15,
        width: 15,
    },
    title: {
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
    },
    addButton: {
        fontSize: 30,
        fontWeight: "bold",
        right: 20,
        marginTop: -7.5
    }
})