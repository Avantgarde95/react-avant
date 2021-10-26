import React from 'react';
import { render } from 'react-dom';

import { App } from 'demo/component/App';
import 'demo/style/Page.scss';

render(<App />, document.querySelector('.Root'));
