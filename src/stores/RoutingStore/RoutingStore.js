

import { observable, action, computed } from "mobx";
import { NavigationActions, StackActions, DrawerActions } from 'react-navigation'

class RoutingStore {
    @observable nav = null;
    @observable currentScreen = null;

    @action
    setNavigation(navigator) {
        this.nav = navigator
    }

    @action
    goTo = (screen, _params) => {
        let { routeName, params } = screen
        const navigateAction = NavigationActions.navigate(
            routeName
                ? { routeName, params }
                : { routeName: screen, params: { ..._params } })

        this.nav.dispatch(navigateAction)
    }

    @action
    updateCurrrentScreen(screen) {
        this.currentScreen = screen
    }

    @action
    openDrawer() {
        routingStore.nav.dispatch(DrawerActions.openDrawer())
    }

    @action
    closeDrawer() {
        this.nav.dispatch(DrawerActions.closeDrawer())
    }

    @action
    toggleDrawer() {
        this.nav.dispatch(DrawerActions.toggleDrawer())
    }

    @computed
    get getCurrentScreen() {
        return this.currentScreen;
    }

}

const routingStore = new RoutingStore();
export default routingStore;
