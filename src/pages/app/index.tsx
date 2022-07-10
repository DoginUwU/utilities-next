import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../@types/page';
import AppLayout from '../../layouts/AppLayout';

const Dashboard: NextPageWithLayout = () => {
    return <div>Enter</div>;
};

Dashboard.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default Dashboard;
