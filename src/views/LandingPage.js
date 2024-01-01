import { StyleSheet, Text, View } from "react-native";

const LandingPage = () => {
    return(
        <View style={styles.landingPage}>
            <Text style={styles.title}>Spentrace</Text>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    landingPage: {
        flex: 1,
        marginTop: "10%",
        border: "solid",
        borderWidth: 2,
        borderColor: "blue"
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        border: "solid",
        borderWidth: 2,
        borderColor: "red"

    }
})