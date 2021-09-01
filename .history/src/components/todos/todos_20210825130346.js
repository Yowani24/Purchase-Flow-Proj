import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos() {
    const [valorAtual,setValorAtual] = useState(102);

    return (
        <>
            <Comprar valorAtual={valorAtual}/>
        </>
    );
}