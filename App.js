import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

var ExampleComponent = React.createClass({
  render() {
    return (
      <Button
        style={{borderWidth: 1, borderColor: 'black'}}
        color = "red"
        onPress={this._handlePress}>
        Press Me!
      </Button>
    );
  },

  _handlePress(event) {
    fetch('https://mywebsite.com/endpoint/', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Param: 'notified',
      })
    });
    <Text>Police Notified</Text>;
    console.log('Pressed!');
  },
});