"use client"
import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const GloobcampContext = createContext();

export const GloobcampProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', {});

  const updateUserData = (newData) => {
    const updatedUserData = {
      ...userData,
      ...newData,
    };
    setUserData(updatedUserData);
  };

  const gloobcampData = {
    userData,
    updateUserData,
  };

  return (
    <GloobcampContext.Provider value={gloobcampData}>
      {children}
    </GloobcampContext.Provider>
  );
};

export const useGloobcamp = () => {
  return useContext(GloobcampContext);
};