import {useRef, useState} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicacion,
  division,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('');

  const ultimaOperacion = useRef<Operadores>();

  const construirNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.' || numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else {
        setNumero(numeroTexto);
      }
      return;
    }
    setNumero(numero + numeroTexto);
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.division:
        setNumero(`${num2 / num1}`);
        break;
      case Operadores.multiplicacion:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.resta:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.suma:
        setNumero(`${num1 + num2}`);
        break;
    }
    setNumeroAnterior('');
  };

  // C
  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('');
  };

  // +/-
  const valorPositivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero(`-${numero}`);
    }
  };

  // del
  const btnDel = () => {
    let negativo = false;
    if (numero !== '0') {
      if (numero.includes('-')) {
        negativo = true;
      }
      setNumero(numero.slice(0, -1));
      if ( (numero.length === 2 && negativo) || (numero.length === 1 && !negativo) ) {
        setNumero('0');
      }
    }
  };

  // /
  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.division;
  };

  // x
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicacion;
  };

  // -
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.resta;
  };

  // +
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.suma;
  };

  return {
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
  };
};