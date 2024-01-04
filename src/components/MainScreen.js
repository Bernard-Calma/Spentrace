import { View } from "react-native"
import { AddBudget, LandingPage } from "../views";
import { useSelector } from "react-redux";

const MainScreen = () => {
    const {view} = useSelector(store => store.view);
    return(
        <View>
            {
                view === "LandingPage" ? <LandingPage/>
                : <AddBudget />
            }
        </View>
    )
}

export default MainScreen;

