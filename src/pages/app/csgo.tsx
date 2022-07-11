import { Container, Stack } from '@mantine/core';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../@types/page';
import { CFGs, Downloads, Profile, Stats, Tournaments } from '../../layouts/app/csgo';
import AppLayout from '../../layouts/AppLayout';

const CSGO: NextPageWithLayout = () => {
    return (
        <Container>
            <Stack spacing={50}>
                <Profile />
                <Stats />
                <CFGs />
                <Tournaments />
                <Downloads />
            </Stack>
        </Container>
    );
};

CSGO.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default CSGO;
