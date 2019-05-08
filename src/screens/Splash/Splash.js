import React from 'react';
import { Animated, Easing, Image, Text } from 'react-native';
import { createAnimation, createInterpolate } from '../../utils/Animation';
import GStyle from '../../utils/GlobalStyles';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.25),
      yValueTitle: new Animated.Value(0),
      xValueSubtitle: new Animated.Value(0),
      spinAnim: new Animated.Value(0.65),
    };
    this.playAnimations();
  }

  playAnimations = () => {
    Animated.parallel([
      createAnimation(this.state.opacity, 1, 500, Easing.ease),
      createAnimation(this.state.spinAnim, 1, 1000, Easing.ease, 500, false),
      createAnimation(this.state.yValueTitle, 1, 1200, Easing.cubic, 300, false),
      createAnimation(this.state.xValueSubtitle, 1, 1000, Easing.linear, 300, false),
    ]).start();
  };

  render() {
    const { spinAnim, yValueTitle, xValueSubtitle } = this.state;
    const spinSubtitle = createInterpolate(
      spinAnim,
      [0, 1],
      ['540deg', '360deg']
    );
    const spinTitle = createInterpolate(spinAnim, [0, 1], ['0deg', '352deg']);
    const yTitleFall = createInterpolate(yValueTitle, [0, 1], ['-65%', '0%']);
    const xSubtitleFall = createInterpolate(
      xValueSubtitle,
      [0, 1],
      ['65%', '0%']
    );

    return (
      <LinearGradient start={{ x: 0, y: .5 }} end={{ x: .5, y: 0 }} colors={[GStyle.GREEN, GStyle.ORANGE, GStyle.BEIGEDARK]} style={styles.linearGradient}>
        <Animated.View style={[styles.container, { opacity: this.state.opacity }]} >
          <Animated.View style={{ top: yTitleFall, transform: [{ rotate: spinTitle }] }} >
            <Text style={styles.title}>Just Hang</Text>
          </Animated.View>
          <Animated.View style={{ left: xSubtitleFall, transform: [{ rotate: spinSubtitle }] }} >
            <Text style={styles.subtitle}>idan</Text>
          </Animated.View>
          <Image
            source={require('../../../assets/images/icon.png')}
            style={styles.logo} />
        </Animated.View>
      </LinearGradient>
    );
  }
}
