import React from 'react';
import styled from 'styled-components';
import { FaAddressCard } from 'react-icons/fa';
import { TiArrowRightThick } from 'react-icons/ti';


export default function Carteira(props) {
    return (
        <div>
            <Carteira_box>
                <div className="top_side">
                    <span>
                        <FaAddressCard className="card_icon"/>
                        <p>Minha Carteira</p>
                    </span>
                    <TiArrowRightThick className="arrow_icon"/>
                </div>
            </Carteira_box>
        </div>
    );
}

const Carteira_box = styled.div`
    width: 300px;
    height:200px;
    margin: 50px auto;
    border:1px solid gray;
    border-radius:10px;
    padding:10px;
    
    .top_side{
        display:flex;
        justify-content:space-between;

        span{
            display:flex;
        }


        .card_icon{

        }
        .arrow_icon{
    
        }
    }
    

`