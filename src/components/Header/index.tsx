import { Burger, Button, Container, Group, Header as MantineHeader } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react';
import { useStyles } from './styles';

const Header: React.FC = () => {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes, cx } = useStyles();

    return (
        <MantineHeader height={60}>
            <Container className={classes.header}>
                <div />
                <Group spacing={20} className={classes.links}>
                    <Link href="/" className={cx(classes.link, { [classes.linkActive]: true })}>
                        Inicio
                    </Link>
                    <Link href="/" className={cx(classes.link, { [classes.linkActive]: false })}>
                        Sobre
                    </Link>
                    <Link href="/" className={cx(classes.link, { [classes.linkActive]: false })}>
                        Github
                    </Link>
                    <Link href="/signin">
                        <Button size="xs">Login</Button>
                    </Link>
                </Group>

                <Burger opened={opened} onClick={() => toggleOpened()} className={classes.burger} size="sm" />
            </Container>
        </MantineHeader>
    );
};

export default Header;
