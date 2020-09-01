import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15
    }
})

class ScreenTitle extends Component {

    render() {
        return (
            <View>
                <Text style={style.title}>{this.props.title}</Text>
            </View>
        )
    }
}

export default ScreenTitle