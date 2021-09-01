import React from 'react';
import styled from 'styled-components';
import { FaAddressCard } from 'react-icons/fa';
import { TiArrowRightThick } from 'react-icons/ti';


export default function Carteira(props) {
    return (
        <div>
            <Carteira_box>
                <div className="top_side">
                    <FaAddressCard className="card_icon"/>
                    <p>Minha Carteira</p>
                    <TiArrowRightThick className="arrow_icon"/>
                </div>
            </Carteira_box>
        </div>
    );
}

const Carteira_box = styled.div`
    width: 300px;
    border:1px solid gray;
    border-radius:10px;
    .top_side{
        display:flex;

        .card_icon{

        }
        .arrow_icon{
    
        }
    }
    

`