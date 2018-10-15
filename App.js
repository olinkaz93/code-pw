import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("travel-diary.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("travel-diary.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("travel-diary.FindPlaceScreen", () => FindPlaceScreen, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: "travel-diary.AuthScreen",
        title: "Login"
    }
});