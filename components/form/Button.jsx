import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet, Text } from 'react-native'

class Button extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8} // when press how much opacity apply
                style={style.container}
                onPress={this.props.onPress}
            >
                <Text style={style.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#3ea784",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        margin: 2,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: "#fff",
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default Button