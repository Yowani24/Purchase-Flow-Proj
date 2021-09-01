import React from 'react';
import styled from 'styled-components';
import { FaAddressCard } from 'react-icons/fa';

export default function Carteira(props) {
    return (
        <div>
            <Carteira_box>
                <div>
                    <FaAddressCard/>
                </div>
            </Carteira_box>
        </div>
    );
}

const Carteira_box = styled.div`

`