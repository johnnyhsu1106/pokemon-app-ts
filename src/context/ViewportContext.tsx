import { ReactNode, createContext, useContext } from 'react'
import useViewport from '../hooks/useViewport';

interface IViewportContext {
  isMobile: boolean;
};

interface ViewportProviderProps {
  children: ReactNode;
};

const ViewportContext = createContext<IViewportContext | null>(null);

const useViewportContext = () => {
  const viewportContext = useContext(ViewportContext);

  if (viewportContext === null) {
    throw new Error('useViewportContext must be used within ViewportProvider');
  }

  return viewportContext;
}

const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const width = useViewport();
  
  const value = {
    isMobile: width <= 980
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
}

export { useViewportContext, ViewportProvider };
