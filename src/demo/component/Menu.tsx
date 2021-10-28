import React from 'react';

import { allSectionNames, useStore } from 'demo/store/Store';
import styles from 'demo/style/Menu.scss';

export const Menu = () => {
    const { currentSectionName, selectSection } = useStore();

    return (
        <div className={styles.menu}>
            {allSectionNames.map(sectionName => (
                <button
                    className={`${styles.section} ${sectionName === currentSectionName ? styles.isSelected : ''}`}
                    key={sectionName}
                    type={'button'}
                    onClick={() => {
                        selectSection(sectionName);
                    }}
                >
                    {sectionName}
                </button>
            ))}
        </div>
    );
};
