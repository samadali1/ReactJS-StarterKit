import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import SplashScreen from './screens/splash/index';
import Navigations from './router/routes';
import ThemeConfig from './theme';
import ScrollToTop from './components/ScrollToTop';
import * as JwtService from './services/auth-services/jwtServices';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const token = JwtService.getAccessToken();
    if (token !== null) {
      // JwtService.loginWithToken(token).then((res) => {
      //     setIsLoaded(true)
      //     console.log(res)
      //     dispatch(UserActions.add_user(res))
      // }).catch((err) => {
      //     JwtService.logout()
      // })
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeConfig>
        <ScrollToTop />
        {isLoaded ? <Navigations /> : <SplashScreen />}
      </ThemeConfig>
    </Provider>
  );
}

export default App;
