import css from './Section.module.scss';
import { useState, useEffect } from 'react';
import Container from 'components/Container/Container';

const hexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const rgbColor = /^rgb\(/;
const rgbaColor = /^rgba\(/;
const varColor = /^var\(/;

const Section = ({ background = 'none', full, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionClasses = {
    [css.Section]: true,
    [css.FullScreen]: full,
    [css.Visible]: isVisible === true,
  };

  const currentSectionClasses = Object.keys(sectionClasses)
    .filter(key => sectionClasses[key])
    .join(' ');

  const backgroundCheck = background => {
    if (hexColor.test(background) || rgbColor.test(background) || rgbaColor.test(background) || varColor.test(background) || background === 'none') {
      return background;
    }
    return `url(${background}) no-repeat center center / cover`;
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={currentSectionClasses} style={{ background: backgroundCheck(background) }}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
