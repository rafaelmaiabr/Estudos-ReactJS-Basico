const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const meuNome = 'Rafael Maia';
  return (
    <NomeContext.Provider value={meuNome}>
      <div className="componente-1">
        <MeuComponente2 />
      </div>
    </NomeContext.Provider>
  )
}

function MeuComponente2() {
  return (
    <div className="componente-2">
      <MeuComponente3 />
    </div>
  )
}

function MeuComponente3() {
  return (
    <div className="componente-3">
      <MeuComponente4 />
    </div>
  )
}

function MeuComponente4() {
  return (
    <NomeContext.Consumer>
      {(NomeContext) => (
        <div className="componentes-4">
          <p>{NomeContext}</p>
        </div>
      )}
    </NomeContext.Consumer>
  )
}

function MeuComponente() {
  return (
    <div id="componentes">
      <MeuComponente1 />
    </div>
  )
}

ReactDOM.render(
  <MeuComponente />,
  document.getElementById('app')
)