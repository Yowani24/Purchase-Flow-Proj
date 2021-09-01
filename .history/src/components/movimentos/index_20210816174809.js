import React from 'react';
import styled from 'styled-components';
import { TiArrowRightThick } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Movimentos(props) {
    return (
        <div>
            <Movimentos_box>
                <div className="top_side">
                    <p>Data</p>
                    <p>Status</p>
                    <p>Quantidade</p>
                </div>

                <div className="bottom_side">
                    <button>
                        <p>Data</p>
                        <AiFillCheckCircle className="check_icon"/>
                        <span>
                            <p>10 ONECO2</p>
                            <TiArrowRightThick className="arrow_right_icon"/>
                        </span>
                    </button>
                </div>
            </Movimentos_box>
        </div>
    );
}

const Movimentos_box = styled.div`
    width: 300px;
    margin: 50px auto;
    border:1px solid darkgray;
    border-radius:10px;
    padding:50px 15px;

    background-image: linear-gradient( 135deg, #79F1A4 10%, #0E5CAD 100%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    
    @media (max-width:415px){
        width:90%;
        margin: auto;
    }

    // =======================TOP_SIDE================

    .top_side{
        display:flex;
        justify-content:space-between;

        width: 90%;

        p{
            font-size:14px;
        }
       
    }

    // ==============BOTTOM_SIDE=================

        .bottom_side{
            width:100%;
            margin-top:5px;
            
            button{
                width:100%;
                display: flex;
                justify-content:space-between;
                align-items:center;

                border:none;
                padding: 5px 10px;
                border-radius:5px;
                color:#000000;
                cursor:pointer;

                background: rgba( 255, 255, 255, 0.25 );
                backdrop-filter: blur( 7.0px );
                -webkit-backdrop-filter: blur( 7.0px );
                border-radius: 5px;

                
                p{
                    font-size:14px;
                }
                .check_icon{
                    color:	#196700;
                }
                
                span{
                    display:flex;
                    align-items:center;

                    p{
                        font-size:12px;
                    }

                    .arrow_right_icon{
                        font-size: 25px;
                        margin-left:10px;
                    }
                }
            }
        }
    

`