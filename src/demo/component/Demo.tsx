import React, { FunctionComponent } from 'react';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon, Code, Sandbox, Markdown } from 'react-avant';
import 'react-avant/index.css';

import styles from 'demo/style/Demo.scss';
import { SectionName, useStore } from 'demo/store/Store';

/**
 * Data of each section.
 */
interface Section {
    description: string;
    code: string;
    view: FunctionComponent;
}

const allSections: Record<SectionName, Section> = {
    Icon: {
        description: 'Component for using Font Awesome easily',
        code: `import React from 'react';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

import { Icon } from 'react-avant';
import 'react-avant/dist/index.css';

const App = () => (
    <div style={{ fontSize: '2rem' }}>
        <Icon definition={faGuitar} />
        <Icon definition={faMusic} />
    </div>
);`,
        view: () => (
            <div style={{ fontSize: '2rem' }}>
                <Icon definition={faGuitar} />
                <Icon definition={faMusic} />
            </div>
        ),
    },
    Code: {
        description: 'Code highlighter built on prism.js',
        code: `import React from 'react';

import { Code } from 'react-avant';
import 'react-avant/dist/index.css';

const App = () => (
    <div>
        <Code language={'typescript'}>const value: number = 5;</Code>
    </div>
);`,
        view: () => (
            <div>
                <Code language={'typescript'}>const value: number = 5;</Code>
            </div>
        ),
    },
    Sandbox: {
        description: 'Code highlighter built on prism.js',
        code: `import React from 'react';

import { Sandbox } from 'react-avant';
import 'react-avant/dist/index.css';

const App = () => (
    <div>
        <style type={'text/css'}>
            {'.sandbox { width: 100%; height: 500px; }'}
        </style>
        <Sandbox className={'sandbox'} name={'lets-react-simple-typescript-example-7xid9'} />
        <Sandbox
            className={'sandbox'}
            name={'lets-react-simple-typescript-example-7xid9'}
            module={'/src/App.ts'}
        />
    </div>
);`,
        view: () => (
            <div>
                <style type={'text/css'}>{'.sandbox { width: 100%; height: 500px; }'}</style>
                <Sandbox className={'sandbox'} name={'lets-react-simple-typescript-example-7xid9'} />
                <Sandbox
                    className={'sandbox'}
                    name={'lets-react-simple-typescript-example-7xid9'}
                    module={'/src/App.ts'}
                />
            </div>
        ),
    },
    Markdown: {
        description: 'Markdown renderer built on react-markdown',
        code: `import React from 'react';

import { Markdown } from 'react-avant';
import 'react-avant/dist/index.css';

const App = () => (
    <div>
        <Markdown fallback={'Loading...'}>
            {\`# My article

## Fruits

- Apple
- Banana
- Orange

## Drinks

- Water
- Juice
- Milk\`}
        </Markdown>
    </div>
);`,
        view: () => (
            <div>
                <Markdown fallback={'Loading...'}>
                    {`# My article

## Fruits

- Apple
- Banana
- Orange

## Drinks

- Water
- Juice
- Milk`}
                </Markdown>
            </div>
        ),
    },
};

export const Demo = () => {
    const { currentSectionName } = useStore();

    const section = allSections[currentSectionName];
    const View = section.view;

    // Use key to force React to re-render <div/> when the section is changed.
    return (
        <div className={styles.demo} key={currentSectionName}>
            <h3 className={styles.sectionName}>{currentSectionName}</h3>
            <div className={styles.sectionDescription}>{section.description}</div>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <Code language={'tsx'}>{section.code}</Code>
                </div>
                <div className={styles.column}>
                    <View />
                </div>
            </div>
        </div>
    );
};
