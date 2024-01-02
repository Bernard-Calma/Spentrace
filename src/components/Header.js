import { StyleSheet, Text, View } from "react-native"
import Logo from "./Logo";

const Header = () => {
    return(
        <View style={styles.header}>
            <Logo />
            <Text style={{
                fontFamily: "roboto", 
                fontSize: 18,
            }}>Budget</Text>
        </View>
  
        
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        marginTop: "10%",
        width: "100%",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
    }
})