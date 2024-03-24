import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Header from './components/Header';
import ImageClima from './components/BoxIconClima';
import InfosLocais from './components/InfosLocais';
import DadosDia from './components/DadosDia';
import NextDays from './components/NextDays';

import sun from './assets/sun.png';
import sunCloud from './assets/sun-clouds.png';
import cloud from './assets/clouds.png';
import rain from './assets/sun-clouds-rain.png';
import storm from './assets/lightning.png';

export default function Home() {
  const [clima, setClima] = useState(null);
  const [cidade, setCidade] = useState('Jaboatão dos Guararapes');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=f3c1a96d&city_name=${cidade}`,
        );
        if (!response.ok) {
          throw new Error('Erro ao obter os dados do clima');
        }
        const data = await response.json();
        console.log(data.results.temp);
        setClima(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cidade]);

  if (!clima) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  function getIconClima() {
    if (clima.results.description === 'Tempestade') {
      return storm;
    } else if (clima.results.description === 'Chuvas esparsas') {
      return rain;
    } else if (clima.results.description === 'Tempo nublado') {
      return cloud;
    } else if (clima.results.description === 'Sol com muitas nuvens') {
      return sunCloud;
    } else {
      return sun;
    }
  }

  return (
    <View
      style={{
        backgroundColor:
          clima.results.currently === 'dia' ? '#30addd' : '#124bb4',
      }}
      className="flex-1 pt-[40px] px-4"
    >
      <Header onCityChange={setCidade} />

      <ImageClima
        temperatura={`${clima.results.temp}°`}
        descricao={clima.results.description}
        min={clima.results.forecast[0].min}
        max={clima.results.forecast[0].max}
        url={getIconClima()}
      />
      <InfosLocais
        objeto={clima.results.currently}
        chuva={clima.results.cloudiness}
        temperatura={clima.results.temp}
        vento={clima.results.wind_speedy.split(' ')[0]}
      />
      <DadosDia
        nascer={clima.results.sunrise}
        por={clima.results.sunset}
        objeto={clima.results.currently}
      />
      <NextDays
        objeto={clima.results.currently}
        diaUmMax={clima.results.forecast[0].max}
        diaUmMin={clima.results.forecast[0].min}
        diaDoisMax={clima.results.forecast[1].max}
        diaDoisMin={clima.results.forecast[1].min}
        diaTresMax={clima.results.forecast[2].max}
        diaTresMin={clima.results.forecast[2].min}
        diaQuatroMax={clima.results.forecast[3].max}
        diaQuatroMin={clima.results.forecast[3].min}
        diaCincoMax={clima.results.forecast[4].max}
        diaCincoMin={clima.results.forecast[4].min}
        diaUm={clima.results.forecast[0].weekday}
        diaDois={clima.results.forecast[1].weekday}
        diaTres={clima.results.forecast[2].weekday}
        diaQuatro={clima.results.forecast[3].weekday}
        diaCinco={clima.results.forecast[4].weekday}
        previsaoUm={getIconClima(clima.results.forecast[0].condition)}
        previsaoDois={getIconClima(clima.results.forecast[1].condition)}
        previsaoTres={getIconClima(clima.results.forecast[2].condition)}
        previsaoQuatro={getIconClima(clima.results.forecast[3].condition)}
        previsaoCinco={getIconClima(clima.results.forecast[4].condition)}
      />
    </View>
  );
}
