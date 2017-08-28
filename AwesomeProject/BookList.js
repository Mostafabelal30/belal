'use strict';
 
/*var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Component
   } = React;*/

var BookDetail = require('./BookDetail');
   import React, { Component } from 'react';
import {     Image,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
    } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },

    listView: {
       backgroundColor: '#F5FCFF'
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },

separator: {
       height: 1,
       backgroundColor: '#dddddd'
   },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    }
});

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';
 
class BookList extends Component {

constructor(props) {
       super(props);
       this.state = {
           isLoading: true,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2
           })
       };
   }


componentDidMount() {
       this.fetchData();
   }
 
   fetchData() {
       fetch(REQUEST_URL)
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData.items),
               isLoading: false
           });
       })
       .done();
   }

render() {
     
 
      return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}
                style={styles.listView}
                />
        );
        
}  
    
renderLoadingView() {
    return (
        <View style={styles.loading}>
            <ActivityIndicatorIOS
                size='large'/>
            <Text>
                Loading books...
            </Text>
        </View>
    );
}

renderBook(book) {
       return (
<TouchableHighlight onPress={() => this.showBookDetail(book)}  underlayColor='#dddddd'>         
            <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
       );
   }

   showBookDetail(book) {
       this.props.navigator.push({
           title: book.volumeInfo.title,
           component: BookDetail,
           passProps: {book}
       });
   }

}
 
module.exports = BookList;