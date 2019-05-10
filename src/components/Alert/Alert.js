import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Button from '../Button';
import { inject, observer } from "mobx-react/native";
import { AlertType } from '../../utils/Enums'
import Modal from 'react-native-modal'
import GStyle from "../../utils/GlobalStyles";
import styles from './style'
import i18n from '../../i18n'

@inject('AppStore')
@observer
export default class Alert extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        try {
            this.props.onRef(this)
        } catch (e) {
            console.log(e)
        }
    };

    componentWillUnmount = () => {
        this.props.onRef(null)
    };

    setModalVisible = info => {
        this.setState({ onClose: null, errMsgStatus: false, ...info })
    };

    setModalInvisible = () => {
        this.props.AppStore.setAlertInVisible()
    };

    handleCloseModal = () => {
        this.setModalInvisible();
    };

    renderModelByType = () => {
        switch (this.state.type) {
            case AlertType.REGULAR:
                return this.RegularAlert();
            case AlertType.TWO_OPTIONS:
                return this.TwoOptionsAlert();
            case AlertType.SETTINGS:
                return this.settingAlert();
            default:
                break;
        }
    };

    RegularAlert = () => {
        const { title, content, buttonText, onClose } = this.state;
        return (
            <View style={styles.modalWindow}>
                <View style={styles.modalContentHolder}>
                    <Text style={styles.modalHeaderText}>{title}</Text>
                    <Text style={styles.modalItemText}>{content}</Text>
                </View>
                <View style={styles.modalButtonHolder}>
                    <Button
                        buttonType={'buttonBig'}
                        style={styles.modalButton}
                        textStyle={styles.modalButtonText}
                        text={buttonText}
                        onPress={() => {
                            this.setModalInvisible();
                            onClose && onClose()
                        }}
                    />
                </View>
            </View>
        )
    };

    TwoOptionsAlert = () => {
        const { title, content, confirmButtonText, cancelButtonText, onConfirm, onCancel, dataObject } = this.state;
        return (
            <View style={styles.modalWindow}>
                <View style={styles.modalContentHolder}>
                    <Text style={styles.modalHeaderText}>{title}</Text>
                    <Text style={styles.modalItemText}>{content}</Text>
                </View>
                <View style={styles.modalButtonHolder}>
                    <Button
                        buttonType={'buttonBig'}
                        style={styles.modalButton}
                        textStyle={styles.modalButtonText}
                        onPress={() => {
                            this.setModalInvisible();
                            onConfirm(true, dataObject)
                        }}
                        text={confirmButtonText}
                    />
                    <Button
                        buttonType={'buttonBig'}
                        style={styles.modalButton}
                        textStyle={styles.modalButtonText}
                        onPress={() => {
                            this.setModalInvisible();
                            onCancel(false, dataObject)
                        }}
                        text={cancelButtonText}
                    />
                </View>
            </View>
        )
    };

    settingAlert = () => {
        return (
            <View style={styles.modalWindow}>
                <View style={styles.modalContentHolder}>
                    <Text style={styles.modalHeaderText}>{i18n.t('t_settings_alert_title')}</Text>
                    <Text style={styles.modalItemText}>{i18n.t('t_settings_alert_language_title')}</Text>
                    <View style={styles.languageContainer}>
                        <TouchableOpacity onPress={() => this.changeLanguage('he')} style={styles.languageOption}>
                            <Image
                                resizeMode={'contain'}
                                source={require('../../../assets/images/icons/language/he.png')}
                                style={styles.languageIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.changeLanguage('en')} style={styles.languageOption}>
                            <Image
                                resizeMode={'contain'}
                                source={require('../../../assets/images/icons/language/en.png')}
                                style={styles.languageIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.modalButtonHolder}>
                    <Button
                        buttonType={'buttonBig'}
                        style={styles.modalButton}
                        textStyle={styles.modalButtonText}
                        text={i18n.t('t_close')}
                        onPress={() => {
                            this.setModalInvisible();
                        }}
                    />
                </View>
            </View>
        )
    };

    changeLanguage = (language) => {
        console.log('changeLanguage', language)
        this.props.AppStore.setLanguage(language)
    }

    render() {
        const { AppStore } = this.props;
        return (
            <Modal
                isVisible={AppStore.alertVisible}
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInTiming={300}
                animationOutTiming={300}
                backdropColor={'transparent'}
                style={styles.modalContainer}>
                {AppStore.alertVisible && this.renderModelByType()}
            </Modal>
        )
    }
}
