import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos() {
    const [valoratual,setValoratual] = useState(102);
    const xa = 120;

    return (
        <>
            <Comprar xa={xa}/>
        </>
    );
}