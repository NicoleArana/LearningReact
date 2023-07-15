import { useState, createContext, useContext } from "react"

const globalContext = createContext()

const App = () => {
  const [mostrarImagen, setMostrarImagen] = useState(true)

  return (
    <globalContext.Provider value={[mostrarImagen, setMostrarImagen]}>
      <div>
        {mostrarImagen == true && <img src="/lana.png" />}
        <Hello mensajeSiTeAma="Te ama" mensajeSiNoTeAma="No te ama" />
      </div>
    </globalContext.Provider>
  )
} 

export const Hello = ({ mensajeSiTeAma, mensajeSiNoTeAma}) => {
  const [florecita, setFlorecita] = useState(true)
  const [state, setter] = useContext(globalContext)

  return (
    <div>
      <button onClick={() => setter(!state)}>{state == true ? "Desaparecer" : "Aparecer"} a lana</button>

      <h1> Dale click a la florecita para ver si te quiere o no!</h1>

      <img src={florecita == true ? "/happy_flower.png" : "/sad_flower.png"} onClick={() => setFlorecita(!florecita)} />

      <p>{florecita == true ? mensajeSiTeAma : mensajeSiNoTeAma}</p>

      {florecita == true && (
        <>
          <p>Eres el amor de mi vida</p>
          <p>Eres el amor de mi vida</p>
          <p>Eres el amor de mi vida</p>
          <p>Eres el amor de mi vida</p>
          <p>Eres el amor de mi vida</p>
          <p>Eres el amor de mi vida</p>
          <p>Eres el amor de mi vida</p>
        </>
      )}
      
    </div>
  )
}

const Adios = () => {

}

export default App
