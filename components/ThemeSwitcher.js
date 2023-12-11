import { FaSun, FaMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/themeSlice';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);


return (
    <button onClick={() => dispatch(toggleTheme())} className='focus:outline-none mt-1  bg-white rounded-3xl p-2  backdrop-opacity-35 shadow-lg'>
        {theme === 'light' ? <FaMoon className='text-orange-600 text-lg' /> : <FaSun className='text-orange-500 text-center text-sm' />}
    </button>
);
};

export default ThemeSwitcher;
