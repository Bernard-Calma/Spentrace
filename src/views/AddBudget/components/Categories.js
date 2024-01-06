import { StyleSheet, Text, TextInput, View } from "react-native"

const Categories = (props) =>{
    const {
        name,
        type
    } = props
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{name}</Text>
            {
                type === "amount" 
                ? <TextInput
                    style = {styles.numberInput}
                    value={12}
                    inputMode="decimal"
                    maxLength={7}
                    clearButtonMode="while-editing"
                    textAlign="right"
                    placeholder="$0"
                />
                :<></>
            }
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        // borderWidth: 1,
        // borderColor: "red",
    },
    text: {
        fontFamily: "firaCode",
        fontSize: 16
    },
    numberInput: {
        width: 100,
        fontSize: 16,
        fontWeight: "bold",
        color: "#10f",
    }
})