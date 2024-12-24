import './estilo.css'
import Logo from '../Logo';
import OpcoesHeader from '../Opcoes-header';
import IconesHeader from '../icones-header';

function Header(){
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header