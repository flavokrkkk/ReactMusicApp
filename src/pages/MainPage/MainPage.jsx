//Компонент главной страницы с приложением
import tracksList from "../../assets/tracksList";
import Track from "../../components/Track/Track";
import style from './MainPage.module.scss'
import { Input } from "@mui/material";
import { useState } from "react";

//Функция для поиска и фильтрации треков
     const runSearch = (query) => {
            if(!query){
                 return tracksList
            }

            const lowerCaseQuery = query.toLowerCase()

            return [...tracksList].filter(
                    (track) =>
                         track.title.toLowerCase().includes(lowerCaseQuery) || 
                         track.artists.toLowerCase().includes(lowerCaseQuery)
            );
     };

const MainPage = () => {

    const [tracks, setTracks] = useState(tracksList)


    const handleChange = (event) => {
       const foundTracks = runSearch(event.target.value)
       setTracks(foundTracks)
    }

    return(

     <div className={style.search}>
        {/* Добавление инпута с поиском на страницу */}

        <Input className={style.input} placeholder="Поиск треков..." onChange={handleChange}/>
        <div className={style.list}>
            {tracks.map((track) => (
                //С помощью spread оператора через пропсы передаем каждый объект с треком для стилизовки
                <Track key={track.id} {...track}/>
            ))}
        </div>
    </div>
    )
}

export default MainPage;