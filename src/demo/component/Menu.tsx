import React from 'react';

import { allSections, useStore } from 'demo/store/Store';
import styles from 'demo/style/Menu.scss';

export const Menu = () => {
    const { currentSection, selectSection } = useStore();

    return (
        <div className={styles.menu}>
            {allSections.map(section => (
                <button
                    className={`${styles.section} ${section === currentSection ? styles.isSelected : ''}`}
                    key={section}
                    type={'button'}
                    onClick={() => {
                        selectSection(section);
                    }}
                >
                    {section}
                </button>
            ))}
        </div>
    );
};
