import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const style = StyleSheet.create({

    searchBar: {
        flex: 1,
        //backgroundColor: '#D3D3D3',
        flexDirection: "row"
    },
    searchBarIcons: {
        color: 'black',
        fontWeight: "normal",
        elevation: 8,
        fontSize: 24,
        marginTop: 15,
        marginLeft: 20
    }
})

class HeaderActionBarComponent extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View style={style.searchBar}>
                <View style={{ flex: 5 }}>
                    <TouchableOpacity onPress={this.props.handleOnSearchClick}>
                        <AntDesign
                            name="search1"
                            style={style.searchBarIcons}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this.props.handleOnAddClick}>
                        <AntDesign
                            name="plus"
                            style={style.searchBarIcons}
                        />
                        <Text>Add New</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HeaderActionBarComponent