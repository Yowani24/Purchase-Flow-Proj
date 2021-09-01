import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos() {
    const [xa, setXa] = useState(120);

    return (
        <>
            <Comprar xa={xa}/>
        </>
    );
}