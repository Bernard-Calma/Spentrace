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
            {/* <TouchableWithoutFeedback onPress={() => {}}>
                <Entypo name="dots-three-horizontal" size={24} color="white" />
            </TouchableWithoutFeedback> */}
            <Text style={{
                fontFamily: "Roboto-bold", 
                fontSize: 16,
                color: "#B0B7C4"
            }}>Budget List</Text>
            <TouchableWithoutFeedback onPress={() => handleChangeView("Add Budget")}>
                <Entypo name="add-to-list" size={24} color="white" />
            </TouchableWithoutFeedback>
        </>
    )
}

export default navLandingPage;