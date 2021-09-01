import React, { useState } from 'react';
import Comprar from '../compra';

export default function todos() {
    const [xa, setXa] = useState();

    return (
        <div>
            <Comprar setXa={setXa}/>
        </div>
    );
}