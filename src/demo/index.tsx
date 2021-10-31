import React from 'react';
import { render } from 'react-dom';

import { App } from 'demo/component/App';
import 'demo/style/Page.scss';

const temporaryElements = document.querySelectorAll('.temporary');

for (let i = 0; i < temporaryElements.length; i++) {
    temporaryElements[i].parentNode?.removeChild(temporaryElements[i]);
}

render(<App />, document.querySelector('.root'));
