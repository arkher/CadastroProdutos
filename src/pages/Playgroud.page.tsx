import React from 'react';
import { Box } from '@material-ui/core';
import Button from '@/components/Button/Button';
import BaseLayout from '@/layout/base/base.layout';

const Playground: React.FC = () => {
  return (
    <BaseLayout>
      <Box style={{ overflow: 'auto', height: '100%', width: '100%' }}>
        <Button>asdasdasd</Button>
      </Box>
    </BaseLayout>
  );
};

export default Playground;
