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
    margin: 50px auto;
    border:1px solid darkgray;
    border-radius:10px;
    padding:15px;

    background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);

    // background: #DA22FF;
    // background: -webkit-linear-gradient(to right, #9733EE, #DA22FF); 
    // background: linear-gradient(to right, #9733EE, #DA22FF); 


    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
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
            cursor:pointer;
        }
    }

    // =======================MIDDLE_SIDE================

    .middle_side{

        margin-top: 30px;
        padding-left:20px;
        
        P:nth-child(2){
            color:gold;
            font-weight:bold;
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
                padding: 10px;
                border-radius:5px;
                color:#FFFFFF;
                cursor:pointer;
            }
        }
    

`