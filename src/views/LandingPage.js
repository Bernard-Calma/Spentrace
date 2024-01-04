import { StyleSheet, Text, View } from "react-native";
import { MonthChanger } from "../components";

const LandingPage = () => {
    return(
        <View style={styles.landingPage}>
            <MonthChanger/>
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