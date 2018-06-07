import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ListButtons from './ListButtons.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListButtons />, document.getElementById('root'));
registerServiceWorker();
