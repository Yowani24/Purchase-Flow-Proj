import React, { useState } from 'react';
import Comprar from '../compra';
import Pagamento from '../pagamento';

export default function todos() {
    const [xa, setXa] = useState(23);

    return (
        <div>
            <Comprar setXa={setXa}/>
            <Pagamento xa={xa}/>
        </div>
    );
}