// @flow
import * as React from 'react';
import style from './hello-world.scss';

type Props = {
  children: React.Node,
};

const HelloWorld = (props: Props) => (
  <span className={style['hello-world']}>
    {props.children}
  </span>
);

export default HelloWorld;
