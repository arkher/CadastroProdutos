export const converterParaReal = (valor: Number | undefined): string => {
  if (!valor) return '';
  const valorFormatado = valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return valorFormatado;
};
