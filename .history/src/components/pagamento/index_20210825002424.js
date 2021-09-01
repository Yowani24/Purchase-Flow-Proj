import React, { useState } from 'react';
import styled from 'styled-components';
import { TiArrowRightThick, TiStarburst } from 'react-icons/ti';
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


export default function Pagamento(props) {
    const [creditosAcomprar,setCreditosAcomprar] = useState(0)
    return (
        <div>
            <Header>
            <Link className="link" to="/comprar">
                <RiArrowLeftSLine className="arrow_back_icon"/>
            </Link>
                <p>pagamento</p>
            </Header>
            <Pagamento_box>
                <div className="top_side">
                    <p>Comprando</p>
                    <p>{creditosAcomprar} créditos de carbono</p>
                </div>

                <div className="middle_side">
                    <p>Total</p>
                    <p>R$ 1.020,00</p>
                </div>

                <div className="bottom_side">
                    <Link className="link" to="/movimentos">
                        <button>
                            <TiStarburst className="pix_icon"/>
                            <p>Pagar com PIX</p>
                            <TiArrowRightThick className="arrow_right_icon"/>
                        </button>
                    </Link>
                   
                </div>
            </Pagamento_box>
        </div>
       
    );
}

const Header = styled.div` 
    display:flex;
    align-items:center;
    background:dodgerBlue;
    padding:8px;
    color:#000000;

    .link{
        display:flex;
        align-items:center;
        color:#000000;
        
        .arrow_back_icon{
            font-size: 30px;
        }
    }

    p{
        font-size: 25px;
    }
`

const Pagamento_box = styled.div`
    width: 300px;
    margin: 50px auto;
    border:1px solid darkgray;
    border-radius:10px;
    padding:15px;

    background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
    @media (max-width:415px){
        width:85%;
        margin: 20px auto;
    }
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
        
        p:nth-child(2){
            color:red;
            font-size: 20px;
            margin-top:5px;
        }
       
    }

    // ==============BOTTOM_SIDE=================

        .bottom_side{
            width:100%;
            margin-top:30px;
            
            button{
                width:100%;
                display: flex;
                justify-content:space-between;
                align-items:center;

                border:none;
                padding: 5px 30px;
                border-radius:5px;
                color:#000000;
                cursor:pointer;

                background: rgba( 255, 255, 255, 0.25 );
                backdrop-filter: blur( 7.0px );
                -webkit-backdrop-filter: blur( 7.0px );
                border-radius: 5px;

                .pix_icon{
                    font-size: 35px;
                }
                p{
                    font-size:17px;
                }
                .arrow_right_icon{
                    font-size: 30px;
                }
            }
        }
    

`