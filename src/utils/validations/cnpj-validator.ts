/* eslint-disable eqeqeq */
export function isValidCnpj(cnpj: string): boolean {
  const cnpjClean = cnpj.replace(/[^\d]+/g, '');

  if (cnpjClean === '') return false;

  if (cnpjClean.length !== 14) return false;

  // Elimina cnpjCleans invalidos conhecidos
  if (
    cnpjClean === '00000000000000' ||
    cnpjClean === '11111111111111' ||
    cnpjClean === '22222222222222' ||
    cnpjClean === '33333333333333' ||
    cnpjClean === '44444444444444' ||
    cnpjClean === '55555555555555' ||
    cnpjClean === '66666666666666' ||
    cnpjClean === '77777777777777' ||
    cnpjClean === '88888888888888' ||
    cnpjClean === '99999999999999'
  ) {
    return false;
  }

  // Valida DVs
  let tamanho = cnpjClean.length - 2;
  let numeros = cnpjClean.substring(0, tamanho);
  const digitos = cnpjClean.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += ((numeros.charAt(tamanho - i) as unknown) as number) * pos;
    pos -= 1;
    if (pos < 2) {
      pos = 9;
    }
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != ((digitos.charAt(0) as unknown) as number)) return false;

  tamanho += 1;
  numeros = cnpjClean.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += ((numeros.charAt(tamanho - i) as unknown) as number) * pos;
    pos -= 1;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != ((digitos.charAt(1) as unknown) as number)) return false;

  return true;
}
