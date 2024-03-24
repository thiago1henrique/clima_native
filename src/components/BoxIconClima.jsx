import { View, Image, Text } from 'react-native';
import sun from '../assets/sun.png';

export default function ImageClima({ temperatura, descricao, min, max, url }) {
  return (
    <View className="items-center pt-20">
      <Image
        source={url}
        style={{ objectFit: 'contain', width: 160, height: 160 }}
      />

      <Text className="text-5xl text-white font-bold pt-3">{temperatura}</Text>
      <Text className="text-sl text-white font-regular pt-1">{descricao}</Text>
      <Text className="text-sl text-white font-regular pt-1">
        {min}° / {max}°
      </Text>
    </View>
  );
}
