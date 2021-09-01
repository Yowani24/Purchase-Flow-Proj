import React from 'react';
import styled from 'styled-components';
import { FaAddressCard } from 'react-icons/fa';
import { TiArrowRightThick } from 'react-icons/ti';

export default function Comprar(props) {
    return (
        <div>
            <Compra_box>
                <div className="top_side">
                    <p>Valor atual de mercado</p>
                    <p>R$ 102,00</p>
                </div>

                <div className="middle_side">
                    <input type="text" placeholder="Quantidade"/>
                </div>

                <div className="bottom_side">
                    <span>
                        <p>R$ 1.020,00</p>
                        <button>Comprar mais</button>
                    </span>
                </div>
            </Compra_box>
        </div>
    );
}

const Compra_box = styled.div`
    width: 300px;
    margin: 50px auto;
    border:1px solid darkgray;
    border-radius:10px;
    padding:15px;

    background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
    // =======================TOP_SIDE===========
    .top_side{

        p:nth-child(2){
            color:red;
            font-size:20px;
            margin-top:5px;
        }
    }

    // =======================MIDDLE_SIDE================

    .middle_side{

        margin-top: 10px;
        padding-left:20px;
        
        input{
            height:40px;
            border:none;
            outline:none;
            border-radius:5px;
        }
       
    }

    // ==============BOTTOM_SIDE=================

        .bottom_side{
            display:flex;
            justify-content:flex-end;
            margin-top:30px;

            button{
                border:none;
                // background: dodgerblue;
                padding: 10px;
                border-radius:5px;
                color:#FFFFFF;
                cursor:pointer;

                background: rgba( 255, 255, 255, 0.25 );
                backdrop-filter: blur( 7.0px );
                -webkit-backdrop-filter: blur( 7.0px );
                border-radius: 5px;
            }
        }
    

`