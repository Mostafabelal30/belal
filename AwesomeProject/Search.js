
'use strict';
 
//var React = require('react-native');
var SearchBooks = require('./SearchBooks');


   import React, { Component } from 'react';
import {   StyleSheet,
    NavigatorIOS
    } from 'react-native';
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Books',
            component: SearchBooks
        }}/>            
        );
    }
}
 
module.exports = Search;