import { StyleSheet, View } from "react-native"
import { useSelector } from "react-redux";
import { NavLandingPage, NavAddBudget, NavShowBudget } from "./components";

const Navigation = () => {
    const {view} = useSelector(store => store.view)
    return(
        <View style={styles.navContainer}>
            {view === "Budget" ? <NavLandingPage />
            :view === "ViewBudget" ? <NavShowBudget />
            : <NavAddBudget />
            }
        </View>
    )
}

export default Navigation;

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
})