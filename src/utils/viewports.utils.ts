// utilitário para o painel do Storybook

export const viewports = {
  extraSmall: {
    name: 'Portrait phone (default)',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  small: {
    name: 'Landscape phone (sm)',
    styles: {
      width: '640px',
      height: '360px',
    },
  },
  medium: {
    name: 'Tablet (md)',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  large: {
    name: 'Desktop (lg)',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  largeDesktop: {
    name: 'Large Desktop (xl)',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
};
