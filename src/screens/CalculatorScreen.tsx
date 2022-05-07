import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../src/theme/AppTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculatorScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    valorPositivoNegativo,
    btnDel,
    btnDividir,
    construirNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View>
      <Text style={styles.resultadoAnterior}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* Row Buttons */}
        <ButtonCalc texto="C" color="#9b9b9b" accion={limpiar} />
        <ButtonCalc
          texto="+/-"
          color="#9b9b9b"
          accion={valorPositivoNegativo}
        />
        <ButtonCalc texto="del" color="#9b9b9b" accion={btnDel} />
        <ButtonCalc texto="/" color="#ff9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        {/* Row Buttons */}
        <ButtonCalc texto="7" accion={construirNumero} />
        <ButtonCalc texto="8" accion={construirNumero} />
        <ButtonCalc texto="9" accion={construirNumero} />
        <ButtonCalc texto="x" color="#ff9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        {/* Row Buttons */}
        <ButtonCalc texto="4" accion={construirNumero} />
        <ButtonCalc texto="5" accion={construirNumero} />
        <ButtonCalc texto="6" accion={construirNumero} />
        <ButtonCalc texto="-" color="#ff9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        {/* Row Buttons */}
        <ButtonCalc texto="1" accion={construirNumero} />
        <ButtonCalc texto="2" accion={construirNumero} />
        <ButtonCalc texto="3" accion={construirNumero} />
        <ButtonCalc texto="+" color="#ff9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        {/* Row Buttons */}
        <ButtonCalc texto="0" accion={construirNumero} ancho />
        <ButtonCalc texto="." accion={construirNumero} />
        <ButtonCalc texto="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};