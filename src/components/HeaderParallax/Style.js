import { StyleSheet } from 'react-native';
import { width, height, IS_IPHONE_X, HEADER_HEIGHT, STATUS_BAR_HEIGHT, NAV_BAR_HEIGHT, IS_SMALL_DEVICE } from '../../constants/Layout';

export default (styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   backgroundColor: '#e939',
  // },
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
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
}));
