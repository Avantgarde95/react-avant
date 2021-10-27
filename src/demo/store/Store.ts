import create from 'zustand';

export const allSections = ['Icon', 'Code', 'Sandbox', 'Markdown'] as const;

/**
 * Union type of the section names.
 */
export type Section = typeof allSections[number];

/**
 * Store for managing the section selection.
 */
interface Store {
    currentSection: Section;
    selectSection: (section: Section) => void;
}

export const useStore = create<Store>(set => ({
    currentSection: 'Icon',
    selectSection: (section: Section) => {
        set({ currentSection: section });
    },
}));
