import { AppShell } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import Header from '../components/Header';

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <AppShell fixed header={<Header />}>
        {children}
    </AppShell>
);

export default HomeLayout;
