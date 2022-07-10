import { Button, Card, Group, Image, Text } from '@mantine/core';
import React from 'react';

const DownloadCard: React.FC = () => {
    return (
        <Card shadow="sm" p="lg" style={{ flexBasis: '49%' }}>
            <Group position="apart">
                <Group>
                    <Image
                        src="https://cdn.discordapp.com/attachments/880778290170834944/995737797392617472/unknown.png"
                        alt="CSGO"
                        width={40}
                    />
                    <Text weight={500}>Gamersclub</Text>
                </Group>
                <Button variant="light" color="blue">
                    Baixar
                </Button>
            </Group>
        </Card>
    );
};

export default DownloadCard;
