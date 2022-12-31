import React, {useContext, useEffect, useState} from 'react';
import {createContext, ReactNode} from 'react';
import {api} from '../services/api';

interface CategoryProps {
  id: string;
  alterEgo: string;
  fictionname: string;
  avatar: string;
  biography: string;
  characterId: string;
}

interface CategorysContextDataProps {
  heros: CategoryProps[] | undefined;
  antiHeros: CategoryProps[] | undefined;
  villains: CategoryProps[] | undefined;
  aliens: CategoryProps[] | undefined;
  humans: CategoryProps[] | undefined;
}

interface CategoriesProviderProps {
  children: ReactNode;
}

const CategoriesContext = createContext({} as CategorysContextDataProps);

function CategoriesContextProvider({children}: CategoriesProviderProps) {
  const [heros, setHeros] = useState<Array<CategoryProps>>();
  const [antiHeros, setAntiHeros] = useState<Array<CategoryProps>>();
  const [villains, setVillains] = useState<Array<CategoryProps>>();
  const [aliens, setAliens] = useState<Array<CategoryProps>>();
  const [humans, setHumans] = useState<Array<CategoryProps>>();

  const getHeros = async (): Promise<void> => {
    const response = await api.get('/characters/categories/hero');

    setHeros(response.data.characters);
  };

  const getAntiHeros = async (): Promise<void> => {
    const response = await api.get('/characters/categories/antihero');

    setAntiHeros(response.data.characters);
  };

  const getvillains = async (): Promise<void> => {
    const response = await api.get('/characters/categories/villain');

    setVillains(response.data.characters);
  };

  const getAliens = async (): Promise<void> => {
    const response = await api.get('/characters/categories/alien');

    setAliens(response.data.characters);
  };

  const getHumans = async (): Promise<void> => {
    const response = await api.get('/characters/categories/human');

    setHumans(response.data.characters);
  };

  useEffect(() => {
    getHeros();
    getAntiHeros();
    getvillains();
    getAliens();
    getHumans();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        heros,
        antiHeros,
        villains,
        aliens,
        humans,
      }}>
      {children}
    </CategoriesContext.Provider>
  );
}

function useCategorys(): CategorysContextDataProps {
  const context = useContext(CategoriesContext);

  return context;
}

export {CategoriesContextProvider, useCategorys};
