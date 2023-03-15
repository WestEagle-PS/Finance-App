import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

import logo from '../../images/svg/Group.png';
import vector from '../../images/svg/Vector.svg';
import exit from '../../images/svg/exit.svg';

import styles from './Header.module.scss';

const Header = () => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className={styles.containerInner}>
        <div className={styles.logoBox}>
          <img src={logo} width="40" height="40" alt="" />
          <p className={styles.wallet}>Wallet</p>
        </div>
        <div className={styles.exitBox}>
          <p className={styles.name}>{user.username}</p>
          <img className={styles.vector} src={vector} height="30" alt="" />
          <img onClick={onLogout} className={styles.exit} src={exit} alt="" />
          <button onClick={onLogout} className={styles.button} type="button">
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
