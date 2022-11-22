// eslint-disable-next-line @typescript-eslint/no-unused-vars

import styles from './app.module.css';
import { PageTitle } from '@integrated-poc1/ui-header';

const images = [
  '/assets/Broadband_1.jpeg',
  'assets/Broadband and phone.png',
  '/assets/Landline.jpeg'
];

export function App() {
  return (
    <>
      <PageTitle title={"Plans"} />
      {images?.map((item, key) => 
        <div className={styles['img']} key={key} >
          <img src={item} width="200" height="150" alt={''} />
        </div>
      )}
    </>
  );
}

export default App;
