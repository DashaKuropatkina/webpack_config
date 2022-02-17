import React from 'react';
import style from './Message.module.css';

export const Message = ({ author, text }) => {
    return (
        <div className={style.message_box}>
            <div className={style.message_header}>
                <div className={style.message_author}>
                    Пользователь:
                    <span className={style.message_author_name}> {author}</span>
                </div>
            </div>
            <div className={style.message_text}>{text}</div>
        </div>
    );
};