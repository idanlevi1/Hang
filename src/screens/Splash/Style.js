import { StyleSheet } from 'react-native';
import GStyle from '../../utils/GlobalStyles';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: GStyle.BEIGE,
  },
  linearGradient: {
    flex: 1,
  },
  title: {
    fontSize: 52,
    color: GStyle.BLACK,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 26,
    color: GStyle.BORDO,
  },
  logo: {
    height: GStyle.HEIGHT * 0.22,
    width: GStyle.WIDTH * 0.34,
    position: 'absolute',
    top: GStyle.HEIGHT * 0.6,
  },
}));
