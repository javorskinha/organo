import './rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/javorskinha/'>
                            <img src='./imagens/github.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/andrieli-javorski-a69592277/'>
                            <img src='./imagens/linkedin.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='https://discord.gg/QRaFVanE'>
                            <img src='./imagens/discord.png' alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
            <section><img src='./logo.png' alt=''/></section>
            <section>
                <p>Acesse minhas redes!</p>
            </section>
        </footer>
    )
}
export default Rodape;

