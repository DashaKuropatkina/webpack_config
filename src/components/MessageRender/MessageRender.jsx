import React from 'react';
import { Message } from '../Message/Message';
import style from './MessageRender.module.css';

export const MessageRender = (props) => {
    return (
        <>
            {props.messageList.length ? (
                <div className={style.container}>
                    {props.messageList.map((item) => (
                        <Message
                            author={item.author}
                            text={item.text}
                        />
                    ))}
                </div>
            ) : (
                <div className={style.container}>Сообщений пока нет</div>
            )}
        </>
    );
};