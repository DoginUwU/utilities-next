import { Card, Group, Image, Text } from '@mantine/core';
import React from 'react';
import { useStyles } from './styles';

const TournamentCard: React.FC = () => {
    const { classes } = useStyles();

    return (
        <a
            href="https://hltv.org"
            target="_blank"
            rel="noreferrer"
            style={{ flexBasis: '49%' }}
            className={classes.inner}
        >
            <Card shadow="sm" p="lg">
                <Group position="apart">
                    <Group>
                        <Image
                            src="https://cdn.discordapp.com/attachments/880778290170834944/995737797392617472/unknown.png"
                            alt="CSGO"
                            height={40}
                        />
                        <Text weight={500}>Furia</Text>
                    </Group>
                    <Text>14x10</Text>
                    <Group>
                        <Image
                            src="https://cdn.discordapp.com/attachments/880778290170834944/995737797392617472/unknown.png"
                            alt="CSGO"
                            height={40}
                        />
                        <Text weight={500}>MIBR</Text>
                    </Group>
                </Group>
            </Card>
        </a>
    );
};

export default TournamentCard;
