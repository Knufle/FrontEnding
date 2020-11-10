import { useState } from 'react';
import Head from 'next/head';

function IndexPage() {
    return (
      <div>
        <Head>
          <title>FrontEnding</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="icon" />
        </Head>
        <Home/>
      </div>
    )
  }

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador/>
            <div>Teste</div>
        </div>
        )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default IndexPage