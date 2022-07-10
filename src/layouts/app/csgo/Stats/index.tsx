import { Group, Stack, Title } from '@mantine/core';
import React from 'react';
import StatsCard from './StatsCard';

const Stats: React.FC = () => {
    return (
        <Stack>
            <Title order={3} sx={{ textTransform: 'uppercase' }}>
                Suas estatísticas
            </Title>
            <Group noWrap sx={{ overflowX: 'scroll' }} pb={10}>
                <StatsCard />
                <StatsCard />
                <StatsCard />
                <StatsCard />
                <StatsCard />
                <StatsCard />
            </Group>
        </Stack>
    );
};

export default Stats;
