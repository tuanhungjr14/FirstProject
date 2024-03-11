// App.js
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import MainContainer from './MainContainer';

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
