import React from 'react'
import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = '6ac875c128c036b5cf20e988ee66c8b3'

export const FetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key
        }
    })
    return data;
}
