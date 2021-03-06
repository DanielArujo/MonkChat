
import styled from 'styled-components'

const Barra = styled.div`
    background: linear-gradient(180deg, #BA9D4C -10.17%, #F3D991 115.25%);
    width: 4px;
    height: 3em;
    margin: 0em 1em;
    border-radius: 1em;

    @media (max-width: 400px) {
        display: none;
    }
`


const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    margin-bottom: 3em;

    .titulo {
        font: 700 2.2em Montserrat;
    }

    .sair{
        margin-left: 1em;
        cursor: pointer;
        &:hover {
        color: #AFB8A3;
    }
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }
`




export { Barra, ContainerCabecalho }