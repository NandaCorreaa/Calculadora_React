import React, { useState } from "react";
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const Main = styled.body`
background-image: url(https://static.vecteezy.com/ti/vetor-gratis/p1/2371781-vazio-quadro-negro-banner-na-floresta-cena-com-personagem-desenho-de-conto-de-fadas-e-elementos-gratis-vetor.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: 42% 42%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: flex-end;
padding-bottom:30px;
`
const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space- evenly;
height: 70vh;
width: 53%;
text-align: center;

@media (max-width: 420px){
  width: 90%;
  height: 68vh;

}

`
const DivBotao = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;
@media (max-width: 420px){
  justify-content: center;

}

`

const H1 = styled.h1`
color:white;
font-size: 50px;
padding-top: 25px;

`
const P = styled.p`
font-size: 30px;
color: white;

`

const Input = styled.input`
height: 8vh;
width: 18vw;
border-radius: 10px;
font-size: 25px;
text-align: center;

@media (max-width: 420px){
  width: 35vw;
  font-size: 12px;
}
`
const Button = styled.button`
height: 10vh;
width: 7vw;
color: white;
font-size: 30px;
background-color: red;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
  rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
  rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
  rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin: 10px;

  @media (max-width: 420px){
    width:50vw;
    height: 8vh;
    padding: 10px;

  }

`

const ConteinerResultado = styled.section`
display: flex;
justify-content: flex-end;
align-items:center;
width: 100%;
@media (max-width: 420px){
  justify-content: center;

}
`

const H2 = styled.h2`
color: white;
display: flex;
text-align: end;
font-size: 50px;
height: 6vh;
@media (max-width: 420px){
  font-size: 30px;
}
`
const DivResultado = styled.div`
display: flex;
justify-content: center;
align-items:center;
width:75%;
`
  




function App() {
  // o useState é uma função do React (Hook)
  // estrutura do useState:
  // const [variavel, setVariavel] = useState()
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  // (e) evento do onChange
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const diminuir = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicar = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const dividir = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const limpar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado();
  };

  return(
    <Main>
     <Section>
      <GlobalStyle/>
       <H1>Calculadora</H1>
       <P>A matemática é um mundo de infinitas possibilidades!</P>
       <div>
         <Input onChange={capturandoPrimeiroValor} placeholder="Digite o primeiro número" value={primeiroValor}/>
          <Input onChange={capturandoSegundoValor} placeholder="Digite o segundo número" value={segundoValor}/>
       </div>
        <DivBotao>
          <Button onClick={soma}>+</Button>
          <Button onClick={diminuir}>-</Button>
          <Button onClick={multiplicar}>x</Button>
          <Button onClick={dividir}>÷</Button>
          <Button onClick={limpar}>Limpar</Button>
        </DivBotao>
        <ConteinerResultado>
          <DivResultado>
            <H2>{resultado}</H2>
          </DivResultado>
        </ConteinerResultado>
     </Section>
    </Main>
  )
}

export default App