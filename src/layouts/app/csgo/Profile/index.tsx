import { Avatar, Badge, Button, Group, Paper, Text } from '@mantine/core';
import React from 'react';

const Profile: React.FC = () => {
    return (
        <Paper
            radius="md"
            withBorder
            p="lg"
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
            })}
        >
            <Group position="apart">
                <Group>
                    <Avatar src="https://avatars.akamai.steamstatic.com/5d735b00f026cdc2fd0e29fd38e3901d8a78a62d_full.jpg" />
                    <Text>D o g s ♡</Text>
                </Group>
                <Group>
                    <Badge>76561198195432146</Badge>
                    <Button>Abrir na steam</Button>
                    <Button color={'green'}>Abrir CS:GO</Button>
                </Group>
            </Group>
        </Paper>
    );
};

export default Profile;
