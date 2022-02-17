import React from 'react';
import style from './Input.module.css';

export const Input = (props) => {
    return (
        <input
            type="text"
            value={props.value}
            className={style.input}
            onChange={props.onChange}
        />
    );
};