import React from 'react';
import Loader from './Loader';

import './style/PageLoading.css';

const PageLoading = () => {
    return (
      <div className="PageLoading">
        <Loader />
        Loading...
      </div>
    )
}

export default PageLoading;
