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
  //Text Login
  titleLogin: {
    marginTop: 100,
    fontWeight: 'normal',
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
  },
  titleButtonLogin: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 20,
    color: colors.black,
    marginLeft: 100,
  },
  //Button exit
  btnExit: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
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
  //Login
  loginCard: {
    width: deviceWidth,
    height: deviceWidth,
    backgroundColor: colors.darkGrey,
    justifyContent: 'space-around',
    display: 'flex',
  },
  loginButton: {
    width: 340,
    height: 50,
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginLeft: 35,
  },
  contenInput: {
    marginTop: 50,
  },
  textInput: {
    width: 340,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 35,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: colors.ice,
  },
  inputPassowrd: {
    flexDirection: 'row',
    marginTop: 32,
    alignContent: 'center',
  },
  toogle: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    marginTop: 40,
    paddingRight: 20,
    marginLeft: -50,
  },
  eyes: {},

  setaLogin: {
    height: 50,
    width: 50,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const nav = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.black,
    lineHeight: 25,
    marginLeft: 50,
  },
  btnExit: {
    width: 75,
    height: 30,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
  },
});

export { colors, theme, text, nav };
