import { Image, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { useDispatch } from "react-redux"
import { changeView } from "../../../features/viewSlice";
import { leftArrow } from "../../../../assets/icons";

const navShowBudget = () => {
    const dispatch = useDispatch();
    return(<>
        <TouchableWithoutFeedback onPress={() => dispatch(changeView("Budget"))}>
            <Image
                source={leftArrow}
                style={styles.back}
            />
        </TouchableWithoutFeedback>  
    </>)
}

export default navShowBudget;

const styles = StyleSheet.create({
    back: {
        height: 15,
        width: 15,
    }
})