import { useContext, useEffect, useState } from 'react';
import ButtonContact from '../common/ButtonAction/ButtonAction';
import Logo from '../common/Logo/Logo';
import Navigation from '../common/Navigation/Navigation';
import ModalContext from '../../context/ModalContext';

function Header() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const { changeModalVisibility } = useContext(ModalContext);

  useEffect(() => {
    const changeBgColor = () => {
      document.addEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };

    changeBgColor();
    return () => changeBgColor();
  }, []);

  const bgColorClass = scrollY > 0 ? 'header_bg-color_green' : '';
  const outerBgColorButtonSubmit = scrollY > 0 ? 'green' : 'white';

  return (
    <header className={`header ${bgColorClass}`}>
      <div className='header__box-logo'>
        <Logo />
      </div>

      <div className='header__box-navigation'>
        <Navigation
          listJustifyContent='space-between'
          listItemMarginRight={40}
        />
      </div>

      <ButtonContact
        layout='header'
        name='связаться'
        size='s'
        outerBgColor={outerBgColorButtonSubmit}
        handleOnClick={changeModalVisibility.contactWithUs}
      />
    </header>
  );
}

export default Header;
