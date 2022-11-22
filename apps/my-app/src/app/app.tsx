// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { PageTitle } from '@integrated-poc1/ui-header';
import { useApi } from '@integrated-poc1/data-access';

export function App() {
  const apiResponse  = useApi();
  console.log('api', apiResponse)
  return (
    <>
      <PageTitle title={'Home'}/>
     
      {apiResponse ? apiResponse.map(item => 
        <div className={styles['tile']} key = {item.id}> 
        <div className={styles['tile-text']}>{item.title}</div>
        <div className={styles['img']} >
           <img src={item.image} width="200" height="150" alt={''} />
        </div>
        <div className={styles['tile-desc']}>{item.description}</div>
        </div>
      ) : 
      <div> Loading... </div>
      }
    </>
  );
}

export default App;
