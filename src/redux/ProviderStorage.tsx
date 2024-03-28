'use client';

import React from 'react';
import { store } from './store';
import type { AppStore } from './store';
import { setupListeners } from '@reduxjs/toolkit/query';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

interface Props {
  readonly children: ReactNode;
}

export const ProviderStorage = ({ children }: Props) => {
  const storeRef = useRef<null | AppStore>(null);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ProviderStorage;
