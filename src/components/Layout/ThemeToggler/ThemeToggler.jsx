import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/Theme/themeSelectors';
import { setTheme } from 'redux/Theme/themeSlice';
import { Button, Svg } from './ThemeToggler.styled';
import { CgSun } from 'react-icons/cg';
import { FiMoon } from 'react-icons/fi';

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const body = document.getElementById('body');
  body.classList.add(`${theme}-mode`);

  const handleClick = () => {
    dispatch(setTheme());
    const currentClass = body.className;
    body.className = currentClass === 'light-mode' ? 'dark-mode' : 'light-mode';
  };

  return (
    <Button onClick={handleClick}>
      <Svg>
        {theme === 'light' ? (
          <FiMoon size={25} color="#3e85f3" />
        ) : (
          <CgSun size={25} color="#3e85f3" />
        )}
      </Svg>
    </Button>
  );
};

export default ThemeToggler;
