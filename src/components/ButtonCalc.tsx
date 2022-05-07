import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (accion: string) => void;
};

export const ButtonCalc = ({
  texto,
  color = '#2d2d2d',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 160 : 80,
        }}>
        <Text
          style={{
            ...styles.textoBoton,
            color: color === '#9b9b9b' ? '#000' : '#fff',
            alignSelf: ancho ? 'flex-start' : 'center',
            paddingLeft: ancho ? 25 : 0,
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  boton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  textoBoton: {
    // alignSelf: 'center',
    fontSize: 30,
  },
});
