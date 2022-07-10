import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import React, { ReactElement } from 'react';
import { BsCheck } from 'react-icons/bs';
import { NextPageWithLayout } from '../@types/page';
import HomeLayout from '../layouts/HomeLayout';
import { useStyles } from '../styles/Home.modules';

const Home: NextPageWithLayout = () => {
    const { classes } = useStyles();

    return (
        <Container>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Seu novo site de <span className={classes.highlight}>utilidades</span> para produtividade e
                        jogos
                    </Title>
                    <Text color="dimmed" mt="md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ex non purus congue
                        tempor quis a dolor. Aenean id magna nunc. Vestibulum vel est elit. Vestibulum quam purus,
                        dapibus et ex ut, vehicula vulputate felis. Maecenas ac posuere tellus. Donec vulputate porta
                        felis, vel pharetra nibh faucibus elementum.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <BsCheck />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <b>TypeScript based</b> – build type safe applications, all components and hooks export
                            types
                        </List.Item>
                        <List.Item>
                            <b>Free and open source</b> – all packages have MIT license, you can use Mantine in any
                            project
                        </List.Item>
                        <List.Item>
                            <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                            keyboard
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Button radius="xl" size="md" className={classes.control}>
                            Começar agora
                        </Button>
                        <Button variant="default" radius="xl" size="md" className={classes.control}>
                            Descobrir mais
                        </Button>
                    </Group>
                </div>
                <Image src="{image.src}" className={classes.image} alt="Utilities" />
            </div>
        </Container>
    );
};

Home.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default Home;
