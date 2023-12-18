import MainPage from "./pages/MainPage/MainPage"
import Playbar from "./components/Track/Playbar/Playbar"
import style from './global.module.scss'


const App = () => (

  <div className={style.wrapper}>
      <MainPage/>
      <Playbar/>
  </div> 

)
 

export default App
