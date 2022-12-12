import React, {ReactNode} from 'react';
import {CategoriesContextProvider} from '../context/CategoriesContext';

export interface ChildrenDefaultProps {
  children?: ReactNode;
}

const AppProvider: React.FC<ChildrenDefaultProps> = ({children}) => (
  <CategoriesContextProvider>{children}</CategoriesContextProvider>
);

export default AppProvider;
