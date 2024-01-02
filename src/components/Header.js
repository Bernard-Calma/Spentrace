import { Image, StyleSheet, Text, Touchable, TouchableWithoutFeedback, View } from "react-native"
import Logo from "./Logo";
import { useEffect, useState } from "react";



const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [date, setDate] = useState(new Date());
    let [month, setMonth] = useState(date.getMonth())
    let [year, setYear] = useState(date.getFullYear())

    const changeToNextMonth = () => {
        if(month === 11) {
            setMonth(0)
            setYear(year + 1);
        } else setMonth(month + 1);
    }

    const changeToPreviousMonth = () => {
        if(month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else setMonth(month - 1);
    }

    useEffect(()=>{

    },[month])

    return(
        <View style={styles.header}>
            <Logo />
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
                marginTop: 10
            }}>Budget</Text>
            <View style={styles.monthChanger}>
                <TouchableWithoutFeedback onPress={()=>changeToPreviousMonth()}>
                    <Image 
                        source={require('../../assets/icons/left-arrow.png')}
                        style={styles.arrow}
                    />
                </TouchableWithoutFeedback>
                
                <Text style={{
                    fontFamily: "roboto", 
                    fontSize: 16,
                }}>{months[month]} {year}</Text>

                <TouchableWithoutFeedback onPress={()=>changeToNextMonth()}>
                    <Image 
                        source={require('../../assets/icons/right-arrow.png')}
                        style={styles.arrow}
                    />
                </TouchableWithoutFeedback>
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
        margin: 10,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
    },
    arrow: {
        height: 20,
        width: 20,
    }
})