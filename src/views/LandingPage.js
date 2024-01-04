import { StyleSheet, Text, View } from "react-native";

const LandingPage = () => {
    return(
        <View style={styles.landingPage}>
            <Text> Landing Page </Text>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    landingPage: {
        border: "solid",
        borderWidth: 2,
        borderColor: "blue",
    }
})