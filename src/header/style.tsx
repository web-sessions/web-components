import styled from 'styled-components'

export const Container = styled.div`
position:absolute;
top:0;
width:100%;
height:50px;
background-color:#18181b;
box-shadow:0 1px 2px rgba(0,0,0,0.9) ,0 0px 2px rgba(0,0,0,0.9);
display:flex;
z-index:100
`

export const P = styled.p`
margin:0;
padding:0;
color: #e7e7e7;
font-family: 'Noto Sans JP', sans-serif;
height:100%;
width:min-content;
display:flex;
justify-content:center;
align-items:center;
margin-left:12px;
margin-right:12px;
:hover{
    cursor:pointer;
    color:#A970ff
}
`

export const SVGContainer = styled.div`
height:50px;
width:50px;
justify-content:center;
display:flex;
align-items:center;
margin-left:12px;
margin-right:12px;
cursor: pointer;
`

export const Wrapp = styled.div < { justify?: string } > `
display:flex;
width:100%;
justify-content: ${props => props?.justify ?? 'flex-start'}
`