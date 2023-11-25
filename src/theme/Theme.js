import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import Colors from './Colors';
import Utils from './Utils';

// Detect screen width
const WIDTH = Dimensions.get('screen').width;

// Detect screen height
const HEIGHT = Dimensions.get('screen').height;

// Project Theme
const MyTheme = {
    dark: false, // no dark theme
    colors: {
        ...Colors // get from constants/color
    },
    fonts: {
        regular: {
            fontFamily: 'avenir_regular',
        }
    }
};

// App Bar Customize Styles
const appBarStyles = StyleSheet.create({
    header: {
        backgroundColor: "white", 
    },

});

// Customize font size
const Font = StyleSheet.create({
    xxxLargeFont_bold: {
        fontSize: Utils.fontXXXLarge,
        fontWeight:"bold",
        color: 'black'
    },
    xxLargeFont_bold: {
        fontSize: Utils.fontXXLarge,
        fontWeight:"bold",
        color: 'black'
    },
    xxLargeFont: {
        fontSize: Utils.fontXXLarge,
        color: 'black'
    },
    xLargeFont_bold: {
        fontSize: Utils.fontXLarge,
        fontWeight:"bold",
        color: 'black'
    },
    xLargeFont: {
        fontSize: Utils.fontXLarge,
        color: 'black'
    },
    largeFont_bold: {
        fontSize: Utils.fontLarge,
        fontWeight:"bold",
        color: 'black'
    },
    largeFont: {
        fontSize: Utils.fontLarge,
        color: 'black'
    },
    regularFont_bold: {
        fontSize: Utils.fontNormal,
        fontWeight:"bold",
        color: 'black'
    },
    regularFont: {
        fontSize: Utils.fontNormal,
        color: 'black'
    },
    smallFont_bold: {
        fontSize: Utils.fontSmall,
        fontWeight:"bold",
        color: 'black'
    },
    smallFont: {
        fontSize: Utils.fontSmall,
        color: 'black'
    },
    xSmallFont_bold: {
        fontSize: Utils.fontXSmall,
        fontWeight:"bold",
        color: 'black'
    },
    xSmallFont: {
        fontSize: Utils.fontXSmall,
        color: 'black'
    },
    xxSmallFont_bold: {
        fontSize: Utils.fontXXSmall,
        fontWeight:"bold",
        color: 'black'
    },
    xxSmallFont: {
        fontSize: Utils.fontXXSmall,
        color: 'black'
    },
    xxxSmallFont: {
        fontSize: Utils.fontXXXSmall,
        color: 'black'
    },
    xxxSmallFont_bold: {
        fontSize: Utils.fontXXXSmall,
        fontWeight:"bold",
        color: 'black'
    },
})

export { appBarStyles, WIDTH, HEIGHT, Font, MyTheme };