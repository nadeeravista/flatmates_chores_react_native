import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import ScreenTitle from '../form/ScreenTitle.jsx'
import SummaryComponent from '../form/SummaryComponent.jsx';
import ActivityListComponent from '../form/ListComponent.jsx';
import HeaderActionBarComponent from '../actionbar/HeaderActionBarComponent.jsx'
import { connect } from 'react-redux'

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

class ActivityListScreen extends Component {

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

    componentDidMount() {

        fetch(this.props.settings.baseUrl + "/activity/all")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    activities: json.data
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleOnSearchClick = (message) => {
        alert("Searching activities " + message)
    }

    handleOnAddClick = () => {
        alert("Adding new activities")
    }

    render() {

        console.log(this.props.settings.baseUrl)
        return (
            <SafeAreaView style={style.container}>
                <HeaderActionBarComponent
                    handleOnSearchClick={() => this.handleOnSearchClick("Clicked Search Icon")}
                    handleOnAddClick={this.handleOnAddClick}
                />
                <ScreenTitle title="Activities"></ScreenTitle>
                <View style={style.summary}>
                    <SummaryComponent title="Critical activity pending is" />
                </View>
                <View style={style.listContent}>
                    <ActivityListComponent items={this.state.activities}></ActivityListComponent>
                </View>
            </SafeAreaView>
        )
    }
}


function mapStateToProps(state) {
    return {
        settings: state
    }
}


export default connect(mapStateToProps, null)(ActivityListScreen)