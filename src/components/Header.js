import { StyleSheet, Text, View } from "react-native"
import Logo from "./Logo";
import { useState } from "react";

const months = ["January", "February", "March", "April"]

const Header = () => {
    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear())
    return(
        <View style={styles.header}>
            <Logo />
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
                marginTop: 10
            }}>Budget</Text>
            <View style={styles.monthChanger}>
                <Text style={{
                    fontFamily: "roboto", 
                    fontSize: 16,
                }}>{months[date.getMonth()]} {year}</Text>
            </View>
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
    },
    monthChanger: {
        margin: 10
    }
})