import { Group, Stack, Title } from '@mantine/core';
import React from 'react';
import CFGCard from './CFGCard';
import DropzoneCFG from './DropzoneCFG';

const CFGs: React.FC = () => (
    <Stack>
        <Title order={3} sx={{ textTransform: 'uppercase' }}>
            Suas CFG
        </Title>
        <Group noWrap sx={{ overflowX: 'scroll' }} pb={10}>
            <DropzoneCFG />
            <CFGCard />
            <CFGCard />
            <CFGCard />
            <CFGCard />
            <CFGCard />
            <CFGCard />
        </Group>
    </Stack>
);

export default CFGs;
