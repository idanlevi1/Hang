import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import i18n from '../../i18n'

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    OptionItem = ({ iconName, text, onPress }) =>
        <TouchableOpacity onPress={onPress} style={styles.optionClick}>
            <View style={styles.textWithIconContainer}></View>
            <Text style={styles.textOption}>{text}</Text>
        </TouchableOpacity>

    render() {
        const OptionItem = this.OptionItem
        return (
            <ScrollView style={styles.container}>
                <View style={styles.optionList}>
                    <OptionItem text={i18n.t('t_side_menu_home')} iconName={'car-carIcon'} onPress={() => this.props.navigation.navigate('Home')} />
                    <View style={styles.hr} />
                    <OptionItem text={i18n.t('t_side_menu_profile')} iconName={'car-list'} onPress={() => this.props.navigation.navigate('Profile')} />
                    <View style={styles.hr} />
                    <OptionItem text={'ThePlace'} iconName={'emergancy'} onPress={() => this.props.navigation.navigate('ThePlace')} />
                    <View style={styles.hr} />
                    <OptionItem text={'Promotions'} iconName={'tool'} onPress={() => this.props.navigation.navigate('Promotions')} />
                    <View style={styles.hr} />
                    <OptionItem text={i18n.t('t_side_menu_')} iconName={'user'} onPress={() => this.props.navigation.navigate('Profile')} />
                </View>
            </ScrollView>
        );
    }
}

export default SideMenu;