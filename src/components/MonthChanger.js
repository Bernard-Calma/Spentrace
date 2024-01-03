import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const MonthChanger = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return(
        <View style={styles.monthChanger}>
            <TouchableWithoutFeedback onPress={()=>props.changeToPreviousMonth()}>
                <Image 
                    source={require('../../assets/icons/left-arrow.png')}
                    style={styles.arrow}
                />
            </TouchableWithoutFeedback>
            
            <Text style={{
                fontFamily: "roboto", 
                fontSize: 16,
            }}>{months[props.month]} {props.year}</Text>

            <TouchableWithoutFeedback onPress={()=>props.changeToNextMonth()}>
                <Image 
                    source={require('../../assets/icons/right-arrow.png')}
                    style={styles.arrow}
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default MonthChanger

const styles = StyleSheet.create({
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