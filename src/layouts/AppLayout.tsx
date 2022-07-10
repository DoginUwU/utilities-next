import { AppShell } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar';

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <AppShell fixed navbar={<Sidebar />}>
        {children}
    </AppShell>
);

export default AppLayout;
