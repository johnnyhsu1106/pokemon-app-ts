import { ReactNode, createContext, useContext, useState, useEffect } from 'react'

interface IViewportContext {
  isMobile: boolean;
};

interface ViewportProviderProps {
  children: ReactNode;
};

const BREAKPOINT = 980;
const ViewportContext = createContext<IViewportContext | null>(null);

const useViewportContext = () => {
  const viewportContext = useContext(ViewportContext);

  if (viewportContext === null) {
    throw new Error('useViewportContext must be used within ViewportProvider');
  }

  return viewportContext;
}

const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  
  const value = {
    isMobile: width <= BREAKPOINT
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
}

export { useViewportContext, ViewportProvider };
