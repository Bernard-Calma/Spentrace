import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

import {Logo, MonthChanger} from ".";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../features/viewSlice";

const Header = () => {
    const dispatch = useDispatch();
    const {view} = useSelector(store => store.view)
    const handleAddBudget = () => {
        dispatch(changeView("AddBudget"))
    }
    const handleBack = () => {
        dispatch(changeView("LandingPage"))
    }
    return(
        <View style={styles.header}>
            <Logo />
            <View style={styles.title}>
                {/* Menu button */}
                {
                    view === "LandingPage" ? <Text style = {styles.menu}> = </Text> 
                    : <TouchableWithoutFeedback onPress={() => handleBack()}>
                        <Image 
                        source={require('../../assets/icons/left-arrow.png')}
                        style={styles.back}
                    />
                    </TouchableWithoutFeedback>        
                }
                
                <Text style={{
                    fontFamily: "roboto-bold", 
                    fontSize: 18,
                    position: "absolute",
                    left: "43%"
                }}>Budget</Text>
                <TouchableWithoutFeedback onPress={() => handleAddBudget()}>
                    <Text style={styles.addButton}>+</Text>
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
    menu: {
        left: 20, 
        opacity: 0
    },
    back: {
        left: 20,
        height: 15,
        width: 15,
    },
    title: {
        position: "relative",
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderColor: "green", 
        // borderWidth: 1,
    },
    addButton: {
        fontSize: 30,
        fontWeight: "bold",
        right: 20,
        marginTop: -7.5
    }
})