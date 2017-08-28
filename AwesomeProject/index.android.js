'use strict';
 
var Featured = require('./Featured');
var Search = require('./Search');
import React, { Component } from 'react';
import {  AppRegistry,
    TabBarIOS
    } from 'react-native';

class BookSearch extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
 
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'featured'}
                    systemIcon={{uri:'featured'}}
                    //systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab == 'search'}
                    systemIcon={{uri:'search'}}
                    //systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
 
AppRegistry.registerComponent('AwesomeProject', () => BookSearch);

//AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
