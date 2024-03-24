import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import mapPin from '../assets/mapPin.png';
import bell from '../assets/bell.png';
import arrow from '../assets/arrow.png';

export default function Header({ onCityChange }) {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState(false);
  const [novaCidade, setNovaCidade] = useState('Jaboatão dos Guararapes');

  function handleModal() {
    setModal(!modal);
    setInput(!input);
  }

  function mudaCidade(text) {
    setNovaCidade(text);
  }

  function confirmarCidade() {
    onCityChange(novaCidade);
    setInput(false);
  }

  return (
    <View>
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={handleModal}
          >
            <Image
              source={mapPin}
              style={{ objectFit: 'contain', width: 16, height: 16 }}
            />
            <Text className="text-white font-bold px-2">{novaCidade}</Text>

            <Image
              source={arrow}
              style={{ objectFit: 'contain', width: 16, height: 16 }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={bell}
            style={{ objectFit: 'contain', width: 16, height: 16 }}
          />
        </View>
      </View>

      {input && (
        <View style={{ marginTop: 8 }}>
          <TextInput
            value={novaCidade}
            onChangeText={mudaCidade}
            placeholder="Procure por sua cidade"
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 4,
            }}
          />
          <TouchableOpacity
            onPress={confirmarCidade}
            style={{
              backgroundColor: '#2b4475',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 4,
              marginTop: 4,
            }}
          >
            <Text style={{ color: 'white' }}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
