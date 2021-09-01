import React, { useState } from 'react';
import Comprar from '../compra';
import Pagamento from '../pagamento';

export default function todos() {
    const [xa, setXa] = useState();

    return (
        <div>
            <Comprar setXa={setXa}/>
            <Pagamento xa={xa}/>
        </div>
    );
}