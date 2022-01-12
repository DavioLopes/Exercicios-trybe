import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      conteudos.map(item => {
        return (<div>
          <h5> O conteúdo é: {item.conteudo}</h5>
          <h5>Status:  {item.status}</h5>
          <h5>Bloco: {item.bloco}</h5>     
          
        </div>
          )
      })
    )
  }
}

export default Content;