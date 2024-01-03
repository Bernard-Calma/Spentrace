import { StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react";

import Logo from "./Logo";
import MonthChanger from "./MonthChanger";



const Header = () => {
    return(
        <View style={styles.header}>
            <Logo />
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
                marginTop: 10
            }}>Budget</Text>
            <MonthChanger/>
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