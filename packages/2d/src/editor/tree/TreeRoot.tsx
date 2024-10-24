import {clsx} from 'clsx';
import type {JSX} from 'preact';
import styles from './index.module.scss';

export function TreeRoot({
  className,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx(styles.root, className)} {...props} />;
}
