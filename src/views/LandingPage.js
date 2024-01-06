import { StyleSheet, Text, View } from "react-native";
import { MonthChanger } from "../components";
import BudgetList from "./BudgetList/BudgetList";

const LandingPage = () => {
    return(
        <View style={styles.landingPage}>
            <MonthChanger/>
            <BudgetList />
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    landingPage: {
        width: "100%",
        border: "solid",
        // borderWidth: 2,
        // borderColor: "blue",
    }
})