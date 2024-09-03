
export default function App() {
    return (
      <main className="min-h-full flex flex-col">
        <h1>Cadastro</h1>
        <div className="flex flex-col gap-4 p-4">
          <input className="border-x-2 p-2" id="name" type="text" placeholder="Nome" />
          <input className="border-x-2 p-2" id="sobrenome" type="text" placeholder="Sobrenome"/>
          <input className="border-x-2 p-2" id="email" type="email" placeholder="Email"/>
          <input className="border-x-2 p-2" id="senha" type="password" placeholder="Senha"/>
          <button id="botao">Cadastrar</button>
        </div>
      </main>
    )
  }