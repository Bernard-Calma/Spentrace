import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeToNextMonth, changeToPreviousMonth } from '../features/dateSlice';

const MonthChanger = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dispatch = useDispatch();
    const {
        month,
        year
    } = useSelector(store => store.date)
    
    return(
        <View style={styles.monthChanger}>
            <TouchableWithoutFeedback onPress={() => dispatch(changeToPreviousMonth())}>
                <Image 
                    source={require('../../assets/icons/left-arrow.png')}
                    style={styles.arrow}
                />
            </TouchableWithoutFeedback>
            
            <Text style={{
                fontFamily: "roboto", 
                fontSize: 16,
            }}>{months[month]} {year}</Text>

            <TouchableWithoutFeedback onPress={() => dispatch(changeToNextMonth())}>
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