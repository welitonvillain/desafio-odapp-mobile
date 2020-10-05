import React from 'react';
import { View, StatusBar } from 'react-native';

import List from './pages/List';

const App: React.FC = () => {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#F3F3F3' />
            <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
                <List />
            </View>
        </>
    );
}

export default App;