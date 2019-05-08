import { StyleSheet } from 'react-native';
import  GStyle from '../../utils/GlobalStyles';

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
    height: GStyle.NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  hamburgerContainer: {
    position: 'absolute',
    zIndex: 100,
    borderRadius: 30,
    backgroundColor: GStyle.BEIGE,
    top: GStyle.HEADER_HEIGHT / 2.5,
    left: GStyle.WIDTH * .05,
    padding: 5,
  },
  hamburgerIcon: {
    height: 50,
    width: 50,
  },
}));
