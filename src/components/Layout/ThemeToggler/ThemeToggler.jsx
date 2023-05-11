import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/Theme/themeSelectors';
import { setTheme } from 'redux/Theme/themeSlice';
import { Button, Svg } from './ThemeToggler.styled';
import { CgSun } from 'react-icons/cg';
import { FiMoon } from 'react-icons/fi';

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(setTheme())}>
      <Svg>
        {theme === 'light' ? (
          <FiMoon size={26} color="#3e85f3" />
        ) : (
          <CgSun size={26} color="#3e85f3" />
        )}
      </Svg>
    </Button>
  );
};

export default ThemeToggler;
