import React from 'react';
import styles from './loader.scss';

type Props = {
  children: React.ReactNode,
}

export const Loader = ({ children }: Props) => (
  <div className={styles.loader}>
    <h1>Loading...</h1>
    <span className={styles.spinner} />
    <p>{children}</p>
  </div>
);
