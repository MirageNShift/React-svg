import s from './SvgGenerator.module.scss';

import { SvgGeneratorSvgSelector } from './SvgGeneratorSvgSelector';

interface Props {
  random: number;
}

export const SvgGenerator = ({ random }: Props) => {
  const icons = ['facebook', 'instagram', 'twitter', 'youtube'];
  return (
    <div className={s.svg}>
      <SvgGeneratorSvgSelector id={icons[random]} />
    </div>
  );
};
