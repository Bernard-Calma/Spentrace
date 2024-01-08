import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux";
import { NavLandingPage, NavAddBudget } from "./components";

const Navigation = () => {
    const {view} = useSelector(store => store.view)
    return(
        <View style={styles.title}>
            {view === "Budget"
                ? <NavLandingPage />
                : <NavAddBudget />
            }
            
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