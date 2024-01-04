import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import Logo from "./Logo";
import MonthChanger from "./MonthChanger";



const Header = () => {
    const handleAddBudget = () => {
        alert("Add Budget");
    }
    return(
        <View style={styles.header}>
            <Logo />
            <View style={styles.title}>
                {/* Menu button */}
                <Text style = {{left: 20, opacity: 0}}> = </Text> 
                <Text style={{
                    fontFamily: "roboto-bold", 
                    fontSize: 18,
                }}>Budget</Text>
                <TouchableWithoutFeedback onPress={() => handleAddBudget()}>
                    <Text style={styles.addButton}>+</Text>
                </TouchableWithoutFeedback>
            </View>
            <MonthChanger/>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        marginTop: "10%",
        width: "100%",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
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