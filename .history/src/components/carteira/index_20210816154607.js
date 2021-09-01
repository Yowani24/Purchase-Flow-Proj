import React from 'react';
import styled from 'styled-components';
import { FaAddressCard } from 'react-icons/fa';
import { TiArrowRightThick } from 'react-icons/ti';


export default function Carteira(props) {
    return (
        <div>
            <Carteira_box>
                <div>
                    <FaAddressCard className="card_icon"/>
                    <p>Minha Carteira</p>
                    <TiArrowRightThick/>
                </div>
            </Carteira_box>
        </div>
    );
}

const Carteira_box = styled.div`

    .card_icon{

    }

`