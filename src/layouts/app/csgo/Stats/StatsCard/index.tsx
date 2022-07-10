import { Badge, Group, Paper, Progress, Text, ThemeIcon } from '@mantine/core';
import React from 'react';
import { FiClock } from 'react-icons/fi';
import { useStyles, ICON_SIZE } from './styles';

const StatsCard: React.FC = () => {
    const { classes } = useStyles();

    return (
        <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
            <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
                <FiClock size={24} />
            </ThemeIcon>

            <Text align="center" weight={700} className={classes.title}>
                Tempo jogado
            </Text>

            <Group position="apart" mt="xs">
                <Text size="sm" color="dimmed">
                    Progress
                </Text>
                <Text size="sm" color="dimmed">
                    62%
                </Text>
            </Group>

            <Progress value={62} mt={5} />

            <Group position="apart" mt="md">
                <Text size="sm">97 horas</Text>
                <Badge size="sm">Atualizado</Badge>
            </Group>
        </Paper>
    );
};

export default StatsCard;
