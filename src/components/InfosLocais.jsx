import { View, Text, Image } from 'react-native';
import cloud from '../assets/cloud.png';
import term from '../assets/term.png';
import wind from '../assets/wind.png';

export default function InfosLocais({ chuva, temperatura, vento, objeto }) {
  return (
    <View
      className="mt-5 flex-row items-center rounded-3xl h-10 justify-between w-full px-8"
      style={{
        backgroundColor: objeto === 'dia' ? '#91d0e8' : '#2B4475',
      }}
    >
      <View className="flex-row gap-2 items-center">
        <Image
          source={cloud}
          style={{ objectFit: 'contain', width: 24, height: 24 }}
        />
        <Text className="text-white">{chuva}%</Text>
      </View>

      <View className="flex-row gap-2 items-center">
        <Image
          source={term}
          style={{ objectFit: 'contain', width: 24, height: 24 }}
        />
        <Text className="text-white">{temperatura}%</Text>
      </View>

      <View className="flex-row gap-2 items-center">
        <Image
          source={wind}
          style={{ objectFit: 'contain', width: 24, height: 24 }}
        />
        <Text className="text-white">{vento} km/h</Text>
      </View>
    </View>
  );
}
