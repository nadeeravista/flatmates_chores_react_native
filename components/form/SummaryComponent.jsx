import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

const image = { 'url': '../' }

const style = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        elevation: 8,
        shadowColor: "#BFC0C2",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.85,
        shadowRadius: 3.84,
    },
    BorderClass: {
        width: '100%',
        height: 100,
        borderRadius: 10,

    },
    subContent: {
        flex: 3,
        marginTop: 20,
    },
    avatar: {
        flex: 1,
        margin: 10,
        marginLeft: '-97%'
    },
    mainText: {   
        fontWeight: "bold"
    }

})

class SummaryComponent extends Component {

    render() {
        return (
            <View style={style.container}>
                <Image source={require('../../assets/images/1.png')} style={style.BorderClass} />
                <View style={style.avatar}>
                    <Avatar
                        rounded
                        source={{
                            uri: this.props.imageUrl,
                        }}
                        size="large"
                    />
                </View>
                <View style={style.subContent}>
                    <Text style={style.mainText} >{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

export default SummaryComponent