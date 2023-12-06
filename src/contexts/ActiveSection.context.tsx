import { createContext, ReactNode, FC, useState, useContext } from 'react'

import { SectionName } from '../library/types';

type ActiveSectionProviderProps = {
  children: ReactNode;
}

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  // timeOfLastClick: number;
  // setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const ActiveSectionProvider: FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const value = { activeSection, setActiveSection }


  return <ActiveSectionContext.Provider value={value}>
              {children}
          </ActiveSectionContext.Provider>
}



export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}