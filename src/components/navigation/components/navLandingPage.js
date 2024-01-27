import { Text, TouchableWithoutFeedback } from "react-native"
import { useDispatch } from "react-redux";
import { changeView } from "../../../features/viewSlice";
import { Entypo } from '@expo/vector-icons';

const navLandingPage = () => {
    const dispatch = useDispatch()
    const handleChangeView = (view) => {
        dispatch(changeView(view))
    }
    return(
        <>
            {/* Menu button */}
            <TouchableWithoutFeedback onPress={() => {}}>
                <Entypo name="dots-three-horizontal" size={24} color="white" />
            </TouchableWithoutFeedback>
            <Text style={{
                fontFamily: "roboto-bold", 
                fontSize: 18,
            }}>Budget List</Text>
            <TouchableWithoutFeedback onPress={() => handleChangeView("Add Budget")}>
                <Entypo name="add-to-list" size={24} color="black" />
            </TouchableWithoutFeedback>
        </>
    )
}

export default navLandingPage;