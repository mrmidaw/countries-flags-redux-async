import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { setTheme } from './theme-slice';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    }
    return (
        <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
                <IoMoonOutline size="14px" />
            ) : (<IoMoon size="14px" />)
            }{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </ModeSwitcher>
    );
};
