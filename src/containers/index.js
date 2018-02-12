import React, { Component } from 'react';
import SectionListBasics from '../components/test';
import { StackNavigator } from 'react-navigation';



export default StackNavigator(
    {
        Home: {
            screen: SectionListBasics,
        }
    },
    {
        initialRouteName: 'Home',
    }
);

