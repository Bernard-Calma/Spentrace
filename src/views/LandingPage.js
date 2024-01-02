import { StyleSheet, Text, View } from "react-native";

const LandingPage = () => {
    return(
        <View style={styles.landingPage}>
            <Text style={{fontFamily:"roboto-bold", fontWeight:"bold", fontSize:32}}>Spentrace</Text>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    landingPage: {
        flex: 1,
        marginTop: "10%",
        border: "solid",
        // borderWidth: 2,
        // borderColor: "blue",
    }
})