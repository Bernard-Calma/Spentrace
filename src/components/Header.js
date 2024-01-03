import { StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react";

import Logo from "./Logo";
import MonthChanger from "./MonthChanger";



const Header = () => {
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
            <MonthChanger
                month = {month}
                date = {date}
                year = {year}
                changeToNextMonth = {changeToNextMonth}
                changeToPreviousMonth = {changeToPreviousMonth}
            />
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