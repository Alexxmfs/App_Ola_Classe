import { TouchableOpacity, View, TextInput, Image, StyleSheet } from "react-native";

 export const CustomInput = () => {
    return (
        <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
        <TextInput 
        style={styles.input} 
        />
        </View>
    )
}

export const CustomInputDate = () => {
    return (
        <View styles={{ alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
        <TextInput 
        placeholder="dd/mm/yyyy"
        style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#DCE8FF',
        width: 350,
        marginTop: 10,
        borderColor: '#ACD3FC',
        borderRadius: 8,
    }
})
