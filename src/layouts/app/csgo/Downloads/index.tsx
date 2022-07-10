import { Group, Stack, Title } from '@mantine/core';
import React from 'react';
import DownloadCard from './DownloadCard';
const Downloads: React.FC = () => {
    return (
        <Stack>
            <Title order={3} sx={{ textTransform: 'uppercase' }}>
                Seus downloads
            </Title>
            <Group pb={10}>
                <DownloadCard />
                <DownloadCard />
                <DownloadCard />
                <DownloadCard />
                <DownloadCard />
            </Group>
        </Stack>
    );
};

export default Downloads;
