import React from 'react';
import styles from './flash-message.scss';

type Props = {
  children: React.ReactNode,
}

export const FlashMessage = ({ children }: Props) => (
  <p className={styles['flash-message']}>{children}</p>
);
