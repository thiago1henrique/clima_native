import { View, Text, Image } from 'react-native';
import sol from '../assets/nascer.png';
import lua from '../assets/por.png';

export default function InfosLocais({ nascer, por, objeto }) {
  return (
    <View
      className="mt-5 flex-row items-center rounded-3xl justify-between w-full px-8 py-2"
      style={{
        backgroundColor: objeto === 'dia' ? '#91d0e8' : '#2B4475',
      }}
    >
      <View className="flex-row items-center gap-1">
        <Image
          source={sol}
          style={{ objectFit: 'contain', width: 24, height: 24 }}
        />
        <Text className="text-sm text-white">{nascer}</Text>
      </View>
      <Text className="text-white">|</Text>
      <View className="flex-row items-center gap-1">
        <Image
          source={lua}
          style={{ objectFit: 'contain', width: 24, height: 24 }}
        />
        <Text className="text-sm text-white">{por}</Text>
      </View>
    </View>
  );
}
