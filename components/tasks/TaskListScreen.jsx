import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import ScreenTitle from '../form/ScreenTitle.jsx'
import SummaryComponent from '../form/SummaryComponent.jsx';
import ActivityListComponent from '../form/ListComponent.jsx';
import HeaderActionBarComponent from '../actionbar/HeaderActionBarComponent.jsx'

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    summary: {
        flex: 2,
    },
    listContent: {
        margin: 10,
        flex: 7,
    },

})

class TaskListScreen extends Component {

    constructor() {
        super()

        this.state = {
            activities: [
                { icon: 'bath', title: 'Cleaning showerbox', title1: 'Nadeera' },
                { icon: 'tree', title: 'Lown moaving', title1: 'Subish' },
                { icon: 'home', title: 'Vacuming upstairs', title1: 'Jignesh' },
            ]
        }
    }

    handleOnSearchClick = () => {
        alert("Searching tasks")
    }

    handleOnAddClick = () => {
        alert("Adding new tasks")
    }

    render() {
        return (
            <SafeAreaView style={style.container}>
                <HeaderActionBarComponent
                    handleOnSearchClick={this.handleOnSearchClick}
                    handleOnAddClick={this.handleOnAddClick}
                />
                <ScreenTitle title="Tasks"></ScreenTitle>
                <View style={style.summary}>
                    <SummaryComponent title="Most active task is" imageUrl="https://randomuser.me/api/portraits/men/41.jpg" />
                </View>
                <View style={style.listContent}>
                    <ActivityListComponent items={this.state.activities}></ActivityListComponent>
                </View>
            </SafeAreaView>
        )
    }
}

export default TaskListScreen
