import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader}>
        <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="white"
            secondaryColor="blue"
        />
        </div>
    );
}