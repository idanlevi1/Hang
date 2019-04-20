import { StyleSheet } from 'react-native';
import { BRANDTS } from '../../constants/Colors';
import { height, width } from '../../constants/Layout';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2934',
  },
  title: {
    fontSize: 52,
    color: BRANDTS.darkSec,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 26,
    color: BRANDTS.light,
  },
  logo: {
    height: height * 0.22,
    width: width * 0.34,
    position: 'absolute',
    top: height * 0.6,
  },
}));
