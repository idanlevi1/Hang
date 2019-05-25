import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Style';
import { HEADER_HEIGHT } from '../../utils/GlobalStyles';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { inject, observer } from 'mobx-react/native';
import GStyle from '../../utils/GlobalStyles';
import Color from "color";

@inject('RoutingStore')
@observer
export default class HeaderParallax extends React.Component {

  renderNavBar = () => {
    const { backButton, buttonItem, navigation } = this.props
    return (
      <View style={styles.navContainer}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconNavBar} onPress={this.props.RoutingStore.openDrawer}>
            <Image
              resizeMode={'contain'}
              source={require('../../../assets/images/icons/hamburger.png')}
              style={styles.hamburgerIcon} />
          </TouchableOpacity>
          {backButton && navigation ?
            <TouchableOpacity style={styles.iconNavBar} onPress={() => navigation.goBack()}>
              <Image
                resizeMode={'contain'}
                source={require('../../../assets/images/icons/back.png')}
                style={styles.hamburgerIcon} />
            </TouchableOpacity>
            : <View />
          }
        </View>
      </View>
    )
  }

  render() {
    const { title, children, onScrollBeginDrag, onScrollEndDrag, navbarColor, imageScale, backgroundImage, backgroundColor, headerMinHeight, headerMaxHeight } = this.props
    return (
      <ReactNativeParallaxHeader
        headerMinHeight={headerMinHeight || HEADER_HEIGHT}
        headerMaxHeight={headerMaxHeight || 200}
        extraScrollHeight={20}
        navbarColor={navbarColor || GStyle.BLACK}
        backgroundColor={backgroundColor || Color(GStyle.BLACK).alpha(.48)}
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
    );
  }
}
