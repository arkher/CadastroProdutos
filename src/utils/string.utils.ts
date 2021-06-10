export function formatarCNPJ(cnpjDesformatado: string): string {
  return cnpjDesformatado.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5',
  );
}

export function extractNumbers(text: String): string {
  return text.replace(/[^\d]+/g, '');
}

export const getIniciais = (nomeCompleto: string): string => {
  const splited = nomeCompleto?.split(' ');
  const iniciais = splited[0][0] + splited[splited.length - 1][0];
  return iniciais || 'US';
};
