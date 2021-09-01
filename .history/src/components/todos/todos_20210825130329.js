import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos(props) {
    const [valorAtual,setValorAtual] = useState(102);

    return (
        <>
            <Comprar valorAtual={valorAtual}/>
        </>
    );
}