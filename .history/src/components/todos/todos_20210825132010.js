import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos() {
    const [valoratual,setValoratual] = useState(102);
    const [xa, setXa] = useState(120);

    return (
        <>
            <Comprar valoratual={valoratual}/>
        </>
    );
}