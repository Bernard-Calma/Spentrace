import { StyleSheet, Text, View } from "react-native"

const Logo = () => {
    return(
        <View style={styles.logo}>
            <Text style={{
                fontFamily: "roboto-bold", 
                fontWeight: "bold", 
                fontSize: 26,
                textAlign: "center"
            }}>Spentrace</Text>      
        </View>

    )
}

export default Logo;

const styles = StyleSheet.create({
    logo: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "black",
        padding: 5
    }
})