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

                <div className="middle_side">
                    <p>Saldo</p>
                    <p>11 Créditos de Carbono</p>
                </div>

                <div className="bottom_side">
                    <button>Comprar mais</button>
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
    padding:15px;
    
    // =======================TOP_SIDE===========
    .top_side{
        display:flex;
        justify-content:space-between;
        align-items:center;

        span{
            display:flex;
            align-items:center;

            p{
                font-size:20px;
                margin-left:5px
            }
        }


        .card_icon{
            font-size:30px;
        }
        .arrow_icon{
            font-size:30px;
        }
    }

    // =======================MIDDLE_SIDE================

    .middle_side{

        margin-top: 50px;
        padding-left:20px;
        
        P:nth-child(2){
            color:red;
            margin-top:5px;
            font-size:20px;
        }
       
    }

    // ==============BOTTOM_SIDE=================

        .bottom_side{
            display:flex;
            justify-content:flex-end;
            margin-top:30px;
            button{
                border:none;
                background: dodgerblue;
                padding: 5px 10px;
                border-radius:5px;
                color:#FFFFFF;
            }
        }
    

`