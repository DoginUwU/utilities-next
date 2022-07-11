import { Group, Stack, Title } from '@mantine/core';
import React from 'react';
import TournamentCard from './TournamentCard';

const Tournaments: React.FC = () => {
    return (
        <Stack>
            <Title order={3} sx={{ textTransform: 'uppercase' }}>
                Torneios acontecendo agora
            </Title>
            <Group>
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
                <TournamentCard />
            </Group>
        </Stack>
    );
};

export default Tournaments;
