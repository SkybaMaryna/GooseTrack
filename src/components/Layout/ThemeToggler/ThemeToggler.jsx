import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/Theme/themeSelectors';
import { setTheme } from 'redux/Theme/themeSlice';
import { Input, Svg } from './ThemeToggler.styled';
import { CgSun } from 'react-icons/cg';
import { FiMoon } from 'react-icons/fi';

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <label>
      <Input
        type="checkbox"
        onChange={() => {
          dispatch(() => setTheme());
        }}
      />
      <Svg>{theme === 'light' ? <FiMoon /> : <CgSun />}</Svg>
    </label>
  );
};

export default ThemeToggler;
