export const isValidCpf = (cpf: string): boolean => {
  const cpfClean = cpf.replace(/[^\d]+/g, '');

  if (cpfClean == null) {
    return false;
  }
  if (cpfClean.length !== 11) {
    return false;
  }
  if (
    cpfClean === '00000000000' ||
    cpfClean === '11111111111' ||
    cpfClean === '22222222222' ||
    cpfClean === '33333333333' ||
    cpfClean === '44444444444' ||
    cpfClean === '55555555555' ||
    cpfClean === '66666666666' ||
    cpfClean === '77777777777' ||
    cpfClean === '88888888888' ||
    cpfClean === '99999999999'
  ) {
    return false;
  }
  let numero = 0;
  let caracter = '';
  const numeros = '0123456789';
  let j = 10;
  let somatorio = 0;
  let resto = 0;
  let digito1 = 0;
  let digito2 = 0;
  let cpfAux = '';
  cpfAux = cpfClean.substring(0, 9);
  for (let i = 0; i < 9; i += 1) {
    caracter = cpfAux.charAt(i);
    if (numeros.search(caracter) === -1) {
      return false;
    }
    numero = Number(caracter);
    somatorio += numero * j;
    j -= 1;
  }
  resto = somatorio % 11;
  digito1 = 11 - resto;
  if (digito1 > 9) {
    digito1 = 0;
  }
  j = 11;
  somatorio = 0;
  cpfAux += digito1;
  for (let i = 0; i < 10; i += 1) {
    caracter = cpfAux.charAt(i);
    numero = Number(caracter);
    somatorio += numero * j;
    j -= 1;
  }
  resto = somatorio % 11;
  digito2 = 11 - resto;
  if (digito2 > 9) {
    digito2 = 0;
  }
  cpfAux += digito2;
  if (cpfClean !== cpfAux) {
    return false;
  }

  return true;
};
