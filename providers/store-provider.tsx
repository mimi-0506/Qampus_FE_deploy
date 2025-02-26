'use client';

import {createInfoStore, InfoStore} from '@/stores/search/infoStore';
import {createContext, type ReactNode, useContext, useRef} from 'react';

import {useStore} from 'zustand';

export interface storeProviderProps {
  children: ReactNode;
}

export type InfoStoreApi = ReturnType<typeof createInfoStore>;

export const InfoStoreContext = createContext<InfoStoreApi | undefined>(
  undefined,
);

export const InfoStoreProvider = ({children}: storeProviderProps) => {
  const storeRef = useRef<InfoStoreApi>(null);
  if (!storeRef.current) storeRef.current = createInfoStore();

  return (
    <InfoStoreContext.Provider value={storeRef.current}>
      {children}
    </InfoStoreContext.Provider>
  );
};

export const useInfoStore = <T,>(selector: (store: InfoStore) => T): T => {
  const infoStoreContext = useContext(InfoStoreContext);

  if (!infoStoreContext)
    throw new Error(`useInfoStore must be used within InfoStoreProvider`);

  return useStore(infoStoreContext, selector);
};
