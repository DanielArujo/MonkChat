
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { Barra, ContainerCabecalho } from './styled'



export default function Cabecalho() {
    
    const navigation = useHistory();

    const logoff = () =>{
    Cookies.remove('usuario-logado')
    navigation.push('/');

}
    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <div className="sair" onClick={logoff}> Sair </div>
        </ContainerCabecalho>
    )
}
