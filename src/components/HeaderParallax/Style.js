import { StyleSheet } from 'react-native';
import  GStyle from '../../utils/GlobalStyles';
import Color from "color";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: GStyle.HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: GStyle.STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    marginTop: GStyle.STATUS_BAR_HEIGHT + 5 ,
    paddingHorizontal: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  iconLeft: {
    backgroundColor: GStyle.WHITE,
    opacity: 0.1,
  },  
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconNavBar: {
    borderRadius: 25,
    backgroundColor: Color(GStyle.BEIGE).alpha(0.57),
  },
  hamburgerIcon: {
    height: 50,
    width: 50,
  },
}));
