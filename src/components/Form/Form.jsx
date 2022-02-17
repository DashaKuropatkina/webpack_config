import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <Input value={props.value} onChange={props.onChange} />
            <Button value={props.value} type={props.type}>
                Отправить
            </Button>
        </form>
    );
};