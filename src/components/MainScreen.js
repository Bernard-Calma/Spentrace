import { StyleSheet, View } from "react-native"
import { AddBudget, LandingPage } from "../views";
import { useSelector } from "react-redux";

const MainScreen = () => {
    const {view} = useSelector(store => store.view);
    return(
        <View style = {styles.mainScreen}>
            {
                view === "Budget" ? <LandingPage/>
                : <AddBudget />
            }
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    mainScreen: {
        width: "100%",
        display: "flex",
        // borderWidth: 1,
        // borderColor: "red"
    }
})
