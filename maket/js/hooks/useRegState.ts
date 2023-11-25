import { TregState } from '@js/types/forms/login';
import React, { useEffect, useState } from 'react';

type Treturn = [TregState, React.Dispatch<React.SetStateAction<TregState>>];

export default (setWindowBlur: React.Dispatch<React.SetStateAction<boolean>>): Treturn => {
    const [regState, setRegState] = useState<TregState>();
    useEffect(() => {
        setWindowBlur(!!regState);
    }, [regState]);
    return [regState, setRegState];
};
