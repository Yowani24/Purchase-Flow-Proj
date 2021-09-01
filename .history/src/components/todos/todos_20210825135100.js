import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos() {
    const [xa, setXa] = useState(120);

    return (
        <div>
            <Comprar xa={xa}/>
        </div>
    );
}