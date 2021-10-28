import create from 'zustand';

export const allSectionNames = ['Icon', 'Code', 'Sandbox', 'Markdown'] as const;

/**
 * Union type of the section names.
 */
export type SectionName = typeof allSectionNames[number];

/**
 * Store for managing the section selection.
 */
interface Store {
    currentSectionName: SectionName;
    selectSection: (sectionName: SectionName) => void;
}

export const useStore = create<Store>(set => ({
    currentSectionName: 'Icon',
    selectSection: (sectionName: SectionName) => {
        set({ currentSectionName: sectionName });
    },
}));
