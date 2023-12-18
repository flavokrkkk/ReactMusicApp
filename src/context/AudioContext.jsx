//Работа с контекстом для прослушивания треков
import { createContext, useState} from "react";
import tracksList from "../assets/tracksList";


const audio = new Audio()

export const AudioContext = createContext({})

//Основная логика

const AudioProvider = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState(tracksList[0])
    const [isPlaying, setIsPlaying] = useState(false)

    const handleToggleAudio = (track) => {

            if(currentTrack.id !== track.id){
                setCurrentTrack(track)
                setIsPlaying(true)


                audio.src = track.src
                audio.currentTime = 0
                audio.play()

                return
            }

            if(isPlaying){
                audio.pause()
                setIsPlaying(false)
            } else{
                audio.play()
                setIsPlaying(true)
            }
    }

    //Данные, которые мы хотим передать в контекст
    const value = {audio, currentTrack, isPlaying, handleToggleAudio}

    return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider