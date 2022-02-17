import React, { useEffect, useMemo, useState, useCallback } from 'react';
import style from './App.module.css';
import { Form } from './components/Form/Form';
import { MessageRender } from './components/MessageRender/MessageRender';

export const App = () => {
    const userName = 'Ваше имя';
    const [inputValue, setInputValue] = useState('');
    const [messageList, setMessageList] = useState([]);
    const newMessage = useMemo(
        () => ({
            author: userName,
            text: inputValue,
        }),
        [inputValue]
    );

    const createMessage = useCallback(
        (ev) => {
            ev.preventDefault();
            setMessageList([...messageList, newMessage]);
            setInputValue('');
        },
        [messageList, newMessage]
    );

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        if (lastMessage !== undefined && lastMessage.author === 'Ваше имя') {
            const msgBot = {
                author: 'Bot',
                text: 'Ваше сообщение прочитано!',
            };
            setMessageList([...messageList, msgBot]);
        };
    }, [messageList]);

    return (
        <>
            <div className={style.container}>
                <p>Введите ваше сообщение</p>
                <Form
                    value={inputValue}
                    onChange={(ev) => {
                        setInputValue(ev.target.value);
                    }}
                    onSubmit={createMessage}
                    type="submit"
                />
                <MessageRender messageList={messageList} />
            </div>
        </>
    );
};
