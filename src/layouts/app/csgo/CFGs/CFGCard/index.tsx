import { Badge, Button, Card, Group, Text } from '@mantine/core';
import React from 'react';

const CFGCard: React.FC = () => (
    <Card shadow="sm" p="lg" style={{ minWidth: 340 }}>
        <Group position="apart">
            <Text weight={500}>Minha configuração.cfg</Text>
            <Badge color="success">10/07/2022</Badge>
        </Group>

        <Text size="sm">Configurações personalizadas para CS:GO</Text>

        <Group position="apart" style={{ marginTop: 28 }}>
            <Button variant="light" color="blue">
                Baixar
            </Button>
            <Button variant="light" color="green">
                Editar
            </Button>
            <Button variant="light" color="red">
                Excluir
            </Button>
        </Group>
    </Card>
);

export default CFGCard;
