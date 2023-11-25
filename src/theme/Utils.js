// responsive font, detect Appbar height, screen width & screen height
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;
const realHeight = height > width ? height : width;

const relativeWidth = num => (realWidth * num) / 100;
const relativeHeight = num => (realHeight * num) / 100;

const fontBaseXXXSmall = 8;
const fontBaseXXSmall = 10;
const fontBaseXSmall = 12;
const fontBaseSmall = 13;
const fontBaseNormal = 14;
const fontBaseLarge = 16;
const fontBaseXLarge = 18;
const fontBaseXXLarge = 24;
const fontBaseXXXLarge = 28;

const responsiveFontSize = (fontSize) => {
    let divider = 375;
    return Math.round(fontSize * realWidth / divider);
    // return fontSize
};

const fontXXXSmall = responsiveFontSize(fontBaseXXXSmall);
const fontXXSmall = responsiveFontSize(fontBaseXXSmall);
const fontXSmall = responsiveFontSize(fontBaseXSmall);
const fontSmall = responsiveFontSize(fontBaseSmall);
const fontNormal = responsiveFontSize(fontBaseNormal);
const fontLarge = responsiveFontSize(fontBaseLarge);
const fontXLarge = responsiveFontSize(fontBaseXLarge);
const fontXXLarge = responsiveFontSize(fontBaseXXLarge);
const fontXXXLarge = responsiveFontSize(fontBaseXXXLarge);

export default {
    fontXXSmall, fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge, fontXXLarge, fontXXXLarge,
    fontXXXSmall, relativeWidth, relativeHeight
};