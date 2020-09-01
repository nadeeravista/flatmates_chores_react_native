import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const style = StyleSheet.create({
    container: {
        
    },
    item: {
        backgroundColor: '#658ac6',
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        elevation: 8,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.75,
        shadowRadius: 1.94,
        flexDirection: 'row'

    },
    itemIcon: {
        color: 'white',
        fontSize: 20,
        flex: 1,
    },
    itemText: {
        color: 'white',
        fontSize :18,
        flex: 8
    },
})

class ListComponent extends Component {

    render() {
        return (
            <View style={style.container}>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index} style={style.item}>
                            <FontAwesome5
                                name={item.icon}
                                style={style.itemIcon}
                            />
                            <Text style={style.itemText} key={index} >{item.title} by {item.title1}</Text>
                        </View>
                    )
                })}

            </View>
        )
    }
}

export default ListComponent