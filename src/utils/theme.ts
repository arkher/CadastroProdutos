type BuildActionColor = (
  color: string,
) => (isAction: boolean) => (currentColor: string) => string;

export const buildActionColor: BuildActionColor = color => isAction => currentColor =>
  isAction ? color : currentColor;
