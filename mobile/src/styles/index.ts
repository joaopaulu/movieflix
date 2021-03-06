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
  //CatalogMovie
  catalog_title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    color: colors.white,
    marginTop: 20,
    marginLeft: 15,
  },
  catalog_year: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    color: colors.orange,
    marginTop: 5,
    marginLeft: 15,
  },
  catalog_subTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: colors.grey,
    marginTop: 5,
    marginLeft: 15,
  },
  text_catalog_btn: {
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  select: {
    color: colors.whiteIce,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 16,
    lineHeight: 26,
    width: 300,
    height: 20,
  },
  modal: {
    color: colors.black,
    fontSize: 16,
  },
  //DetailsMovie
  titleDetails: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 25,
    lineHeight: 33,
  },

  yearDetails: {
    color: colors.orange,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 25,
    lineHeight: 33,
  },
  descriptionDetails: {
    color: colors.cinza,
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 5,
    marginLeft: 25,
    lineHeight: 33,
  },
  titleSinopseDetails: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 25,
    lineHeight: 30,
  },
  sinopse: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 13,
    marginLeft: 19,
    lineHeight: 22,
  },
  btnAvaliation: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: 22,
  },
  titleComment: {
    marginTop: 12,
    marginLeft: 30,
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  nameComment: {
    marginTop: 15,
    marginLeft: 20,
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  comment: {
    marginTop: 13,
    marginLeft: 20,
    color: colors.cinza,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 22,
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
  },
  contenInput: {
    marginTop: 50,
    alignItems: 'center',
  },

  passwordGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    width: 340,
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    borderColor: colors.ice,
  },

  textInput: {
    width: 290,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,

    paddingLeft: 20,
  },

  toogle: {
    width: 55,
    height: 30,
    justifyContent: 'center',
    marginTop: 0,
    paddingRight: 20,
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
    lineHeight: 20,
    marginLeft: 13,
  },
  iconBackContainer: {
    paddingLeft: 14,
    flexDirection: 'row',
  },

  iconBack: {
    width: 18,
    height: 18,
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

const catalog = StyleSheet.create({
  contentSelect: {
    height: 85,
    width: 374,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  contentMovie: {
    width: 374,
    height: 410,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  movie: {
    width: 374,
    height: 228,
    marginTop: 20,
  },
  form_btn: {
    width: 344,
    height: 40,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSelect: {
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  seta: {
    alignItems: 'flex-end',
    marginHorizontal: -20,
    marginTop: 18,
  },
  containerModal: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentModal: {
    marginTop: '5%',
    width: 300,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingVertical: 20,
  },
  itemModal: {
    marginVertical: 5,
    width: 200,
    padding: 20,
    height: 30,
    borderRadius: 10,
    backgroundColor: colors.veryLightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const detailsMovie = StyleSheet.create({
  contentMovie: {
    width: 380,
    height: 760,
    marginTop: 20,
    marginLeft: 17,
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingBottom: 20,
  },
  image: {
    width: 380,
    height: 220,
    marginTop: 15,
  },
  sinopse: {
    width: 335,
    height: 314,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
    marginTop: 10,
    marginLeft: 20,
  },
  contentAvaliation: {
    width: 374,
    height: 210,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    marginTop: 18,
    marginLeft: 17,
  },
  avaliation: {
    width: 335,
    paddingBottom: 80,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginTop: 15,
    paddingTop: 10,
    marginLeft: 20,
    paddingLeft: 20,
  },
  btnAvaliation: {
    width: 335,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 10,
    marginTop: 13,
    marginLeft: 20,
    justifyContent: 'center',
  },
  contentComment: {
    width: 380,
    height: 300,
    marginTop: 20,
    marginLeft: 17,
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingBottom: 20,
  },
  contentName: {
    flexDirection: 'row',
  },
  star: {
    width: 15,
    height: 15,
    marginLeft: 40,
    marginTop: 22,
  },
  inputComment: {
    width: 334,
    height: 70,
    marginLeft: 25,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    marginBottom: 10,
  },
});

const loader = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
});

export { colors, theme, text, nav, catalog, detailsMovie, loader };
