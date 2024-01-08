import { StyleSheet, View } from "react-native"
import Logo from "./Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
    return(
        <View style={styles.header}>
            <Logo />
            <Navigation />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
    }
})