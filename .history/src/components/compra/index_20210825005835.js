import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


export default function Comprar(props) {
    const [valorAtual,setValorAtual] = useState(102);
    const [quantidade, setQuantidade] = useState();
    const [total,setTotal] = useState(valorAtual * quantidade);
    return (
        <div>
                <Header>
                    <Link className="link" to="/">
                        <RiArrowLeftSLine className="arrow_back_icon"/>
                    </Link>
                    <p>comprar</p>
                </Header>
                
                <Compra_box>
                    <div className="top_side">
                        <p>Valor atual de mercado</p>
                        <p>R$ {valorAtual}</p>
                    </div>

                    <div className="middle_side">
                        <input type="number" placeholder="Quantidade" onChange={(e) => {setQuantidade(e.target.value)}}/>
                    </div>

                    <div className="bottom_side">
                        <p>Total</p>
                        <span>
                            <p>R$ {total}</p>
                            <Link to="/pagamento">
                                <button>Pagar</button>
                            </Link>
                            
                        </span>
                    </div>
                </Compra_box>    
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

const Compra_box = styled.div`
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
        padding-left:20px;
        
        input{
            height:35px;
            border:none;
            outline:none;
            border-radius:5px;
            padding-left:5px;
        }
       
    }

    // ==============BOTTOM_SIDE=================

        .bottom_side{
            
            margin-top:30px;

            span{
                display:flex;
                justify-content:space-between;
                align-items:center;

                p{
                    color:red;
                    font-size:20px;
                }

                button{
                    border:none;
                    padding: 10px 30px;
                    border-radius:5px;
                    color:#FFFFFF;
                    cursor:pointer;
    
                    background: rgba( 255, 255, 255, 0.25 );
                    backdrop-filter: blur( 7.0px );
                    -webkit-backdrop-filter: blur( 7.0px );
                    border-radius: 5px;
                }

            }

            
        }
    

`