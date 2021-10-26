import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/themes/prism-okaidia.css';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon } from 'react-avant';
import 'react-avant/style.css';

import styles from 'demo/style/Demo.scss';

export const Demo = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className={styles.demo}>
            <h3 className={styles.section}>Icon</h3>
            <div className={styles.description}>Component for using Font Awesome easily.</div>
            <pre>
                <code className={'language-tsx'}>
                    {`import React from 'react';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon } from 'react-avant';
import 'react-avant/dist/style.css';

const App = () => (
    <div style={{ fontSize: '1.5rem' }}>
        <Icon definition={faGuitar} />
        <Icon definition={faMusic} />
    </div>
);`}
                </code>
            </pre>
            <div style={{ fontSize: '1.5rem' }}>
                <Icon definition={faGuitar} />
                <Icon definition={faMusic} />
            </div>
        </div>
    );
};
