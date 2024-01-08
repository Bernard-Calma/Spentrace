import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { leftArrow } from "../../../../assets/icons";
import { useDispatch } from "react-redux";
import { changeView } from "../../../features/viewSlice";

const NavAddBudget = () => {
    const dispatch = useDispatch()
    const handleChangeView = (view) => {
        dispatch(changeView(view))
    }
    return(
        <View style = {styles.navContainer}>
            <TouchableWithoutFeedback onPress={() => handleChangeView("Budget")}>
                    <Image 
                    source={leftArrow}
                    style={styles.back}
                />
            </TouchableWithoutFeedback>  
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
            }}>Add</Text>
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18
            }}>Save</Text>
        </View>
    )
}

export default NavAddBudget;

const styles = StyleSheet.create({
    navContainer: {
        padding: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
    },
    back: {
        height: 15,
        width: 15,
    }
})