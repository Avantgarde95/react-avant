import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { Icon } from 'react-avant';
import 'react-avant/style.css';

import { Demo } from 'demo/component/Demo';
import styles from 'demo/style/App.scss';

export const App = () => (
    <div className={styles.app}>
        <div className={styles.header}>
            <div>
                <h1 className={styles.title}>react-avant</h1>
                <h2 className={styles.subtitle}>Collection of handy React components</h2>
            </div>
            <a
                className={styles.link}
                title={'Code'}
                target={'_blank'}
                rel={'noopener noreferrer'}
                href={'https://github.com/Avantgarde95/react-avant'}
            >
                <Icon definition={faGithub} />
            </a>
        </div>
        <Demo />
    </div>
);
