import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Label(){
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default Label
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
 })
