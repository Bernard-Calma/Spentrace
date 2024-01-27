import { TouchableWithoutFeedback } from "react-native"
import { useDispatch } from "react-redux"
import { changeView } from "../../../features/viewSlice";
import { Entypo } from '@expo/vector-icons';

const navShowBudget = () => {
    const dispatch = useDispatch();
    return(<>
        <TouchableWithoutFeedback onPress={() => dispatch(changeView("Budget"))}>
            <Entypo name="back" size={24} color="black" />
        </TouchableWithoutFeedback>  
    </>)
}

export default navShowBudget;