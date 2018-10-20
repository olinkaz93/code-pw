import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("md-share-alt", 30),
        Icon.getImageSource("md-menu", 30)
        ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "travel-diary.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "travel-diary.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            
            appStyle: {
                tabBarSelectedButtonColor: "#ff6076"
            },
            drawer: {
                left: {
                    screen: "travel-diary.SideDrawer",
                    passProps: {}
                }
            
            }
        });
    });

    
};

export default startTabs;