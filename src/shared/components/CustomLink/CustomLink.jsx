import css from './custom-link.module.scss';
import { Link } from 'react-router-dom';

const CustomLink = ({ children, to = '/', ...props }) => {
  return (
    <Link className={css.link} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
