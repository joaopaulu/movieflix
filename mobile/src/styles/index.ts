import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = {
  darkGrey: '#525252',
  orange: '#FFC700',
  white: '#FEFEFE',
  black: '#000',
  darkOrange: 'rgba(38,50,56,0.5)',
  grey: '#BFBFBF',
  lightGray: '#6C6C6C',
  veryLightGrey: '#CDCDCD',
  ice: '#E1E1E1',
  whiteIce: '#F2F2F2',
  cinza: '#9E9E9E',
};

const text = StyleSheet.create({
  //Texts Home
  title: {
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 40,
    color: colors.white,
  },
  subTitle: {
    marginTop: 40,
    fontWeight: '400',
    fontSize: 16,
    color: colors.whiteIce,
    textAlign: 'center',
    marginLeft: 60,
    width: 243,
    paddingBottom: 20,
  },

  titleButtonHome: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 20,
    color: colors.black,
    marginLeft: 60,
  },
});

const theme = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: colors.darkGrey,
    paddingBottom: 100,
  },
  draw: {
    width: 340,
    //height:10,
    height: 250,
    marginTop: 80,
    marginLeft: 40,
    alignItems: 'center',
  },
  contentText: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  homeButton: {
    width: 300,
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginLeft: 60,
    marginTop: 30,
  },
  setaContent: {
    height: 51,
    width: 56,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export { colors, theme, text };
