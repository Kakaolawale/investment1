

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import 'tailwindcss/tailwind.css';
import Layouts from '../components/Layouts';
import HeroBanner from '@/components/Herobanner';

function MyApp({ Component, pageProps }) {
  return (
    <div className='dark:bg-black bg-purple-800 text-white ' >
     <Provider store={store}>
     <Layouts>
      <Component {...pageProps} />
      </Layouts>
      </Provider>
    </div>
  );
 
}

export default MyApp;


