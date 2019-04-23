import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style';
import { HEADER_HEIGHT } from '../../constants/Layout';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

export default class HeaderParallax extends React.Component {

  renderNavBar = () => {
    const { backButton, buttonItem, navigation } = this.props
    return (
      <View style={styles.navContainer}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          {backButton && navigation ?
            <TouchableOpacity style={styles.iconLeft} onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
            : <View />
          }
          {buttonItem ?
            buttonItem
            :
            <TouchableOpacity style={styles.iconRight} onPress={() => { }}>
              <Text>icon2</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    )
  }

  render() {
    const { title, children, onScrollBeginDrag, onScrollEndDrag, navbarColor, imageScale, backgroundImage, backgroundColor } = this.props
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={200}
          extraScrollHeight={20}
          navbarColor={navbarColor || "#000"}
          backgroundColor={backgroundColor || "#000"}
          title={title || ''}
          titleStyle={styles.titleStyle}
          backgroundImage={backgroundImage}
          backgroundImageScale={imageScale || 1.2}
          renderNavBar={this.renderNavBar}
          renderContent={() => children}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          scrollViewProps={{
            onScrollBeginDrag: onScrollBeginDrag,
            onScrollEndDrag: onScrollEndDrag,
          }}
        />
      </View>
    );
  }
}
