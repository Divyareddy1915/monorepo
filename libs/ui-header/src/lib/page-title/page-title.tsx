import styles from './page-title.module.css';

/* eslint-disable-next-line */
export interface PageTitleProps {
  title: string;
}

export function PageTitle(props: PageTitleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {props.title}!</h1>
    </div>
  );
}

export default PageTitle;
