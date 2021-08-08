import s from './Home.module.scss';
import { Link } from 'react-router-dom';
import { HomeSvgSelector } from './HomeSvgSelector';

interface Props {}

export const Home = ({}: Props) => {
  return (
    <div className={s.home}>
      <Link style={{ textDecoration: 'none', color: '#fff' }} to="/svg">
        <h1>Получить SVG</h1>
      </Link>
      <div className={s.svg}>
        <HomeSvgSelector id="svg" />
      </div>
    </div>
  );
};
