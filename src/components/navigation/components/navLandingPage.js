import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { useDispatch } from "react-redux";
import { changeView } from "../../../features/viewSlice";

const navLandingPage = () => {
    const dispatch = useDispatch()
    const handleChangeView = (view) => {
        dispatch(changeView(view))
    }
    return(
        <View style={styles.title}>
            {/* Menu button */}
            <Text style = {styles.menu}> = </Text>
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
            }}>Budget List</Text>
            <TouchableWithoutFeedback onPress={() => handleChangeView("Add Budget")}>
                <Text style={styles.addButton}>+</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default navLandingPage;

const styles = StyleSheet.create({
    menu: {
        opacity: 0
    },
    title: {
        padding: 10,
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
        marginTop: -7.5
    }
})