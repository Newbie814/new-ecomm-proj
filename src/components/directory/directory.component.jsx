import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
