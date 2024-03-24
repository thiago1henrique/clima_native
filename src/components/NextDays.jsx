import { View, Text, Image } from 'react-native';
import calendar from '../assets/calendar.png';

export default function InfosLocais({
  diaUmMax,
  diaUmMin,
  diaDoisMax,
  diaDoisMin,
  diaTresMax,
  diaTresMin,
  diaQuatroMax,
  diaQuatroMin,
  diaCincoMax,
  diaCincoMin,
  diaUm,
  diaDois,
  diaTres,
  diaQuatro,
  diaCinco,
  previsaoUm,
  previsaoDois,
  previsaoTres,
  previsaoQuatro,
  previsaoCinco,
  objeto,
}) {
  return (
    <View
      className="mt-5 rounded-3xl h-72 w-full px-8"
      style={{
        backgroundColor: objeto === 'dia' ? '#91d0e8' : '#2B4475',
      }}
    >
      <View className="flex-row pt-4 w-full items-center justify-between">
        <Text className="text-white font-bold text-lg">Próximos dias</Text>
        <Image
          source={calendar}
          style={{ objectFit: 'contain', width: 24, height: 24 }}
        />
      </View>

      <View className="flex-row justify-between w-full mt-4">
        <View className="w-[33.3%]">
          <Text className="font-regular text-white text-lg font-bold">
            {diaUm}
          </Text>
        </View>

        <View className="items-center w-[33.3%] justify-center">
          <Image
            source={previsaoUm}
            style={{ objectFit: 'contain', width: 24, height: 24 }}
          />
        </View>

        <View className="flex-row gap-2 w-[33.3%] justify-end">
          <Text className="font-regular text-white text-lg">{diaUmMax}°</Text>
          <Text className="font-regular text-white text-lg">{diaUmMin}°</Text>
        </View>
      </View>

      <View className="flex-row justify-between w-full mt-4">
        <View className="w-[33.3%]">
          <Text className="font-regular text-white text-lg">{diaDois}</Text>
        </View>

        <View className="items-center w-[33.3%]  justify-center">
          <Image
            source={previsaoDois}
            style={{ objectFit: 'contain', width: 24, height: 24 }}
          />
        </View>

        <View className="flex-row gap-2 w-[33.3%] justify-end">
          <Text className="font-regular text-white text-lg">{diaDoisMax}°</Text>
          <Text className="font-regular text-white text-lg">{diaDoisMin}°</Text>
        </View>
      </View>

      <View className="flex-row justify-between w-full mt-4">
        <View className="w-[33.3%]">
          <Text className="font-regular text-white text-lg">{diaTres}</Text>
        </View>

        <View className="items-center w-[33.3%]  justify-center">
          <Image
            source={previsaoTres}
            style={{ objectFit: 'contain', width: 24, height: 24 }}
          />
        </View>

        <View className="flex-row gap-2 w-[33.3%] justify-end">
          <Text className="font-regular text-white text-lg">{diaTresMax}°</Text>
          <Text className="font-regular text-white text-lg">{diaTresMin}°</Text>
        </View>
      </View>

      <View className="flex-row justify-between w-full mt-4">
        <View className="w-[33.3%]">
          <Text className="font-regular text-white text-lg">{diaQuatro}</Text>
        </View>

        <View className="items-center w-[33.3%]  justify-center">
          <Image
            source={previsaoQuatro}
            style={{ objectFit: 'contain', width: 24, height: 24 }}
          />
        </View>

        <View className="flex-row gap-2 w-[33.3%] justify-end">
          <Text className="font-regular text-white text-lg">
            {diaQuatroMax}°
          </Text>
          <Text className="font-regular text-white text-lg">
            {diaQuatroMin}°
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between w-full mt-4">
        <View className="w-[33.3%]">
          <Text className="font-regular text-white text-lg">{diaCinco}</Text>
        </View>

        <View className="items-center w-[33.3%]  justify-center">
          <Image
            source={previsaoCinco}
            style={{ objectFit: 'contain', width: 24, height: 24 }}
          />
        </View>

        <View className="flex-row gap-2 w-[33.3%] justify-end">
          <Text className="font-regular text-white text-lg">
            {diaCincoMax}°
          </Text>
          <Text className="font-regular text-white text-lg">
            {diaCincoMin}°
          </Text>
        </View>
      </View>
    </View>
  );
}
