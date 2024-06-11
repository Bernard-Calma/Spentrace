import { StyleSheet, Text, View } from "react-native"

const Logo = () => {
    return(
        <View style={styles.logo}>
            <Text style={styles.logoText}>Spentrace</Text>      
        </View>

    )
}

export default Logo;

const styles = StyleSheet.create({
    logo: {
        borderBottomWidth: 1,
        borderColor: "white",
    },
    logoText: {
        fontFamily: "Roboto-bold", 
        fontWeight: "bold", 
        fontSize: 26,
        color: "white",
    }
})