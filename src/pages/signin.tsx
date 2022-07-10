import { Anchor, Button, Container, Divider, Group, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const SignIn = () => {
    return (
        <Container>
            <Group position="center" sx={{ height: '100vh' }}>
                <Paper radius="md" p="xl" withBorder>
                    <Text size="lg" weight={500}>
                        Bem-vindo, faça seu login para continuar
                    </Text>

                    <Group grow mb="md" mt="md">
                        <Button leftIcon={<FaDiscord />}>Entrar com Discord</Button>
                    </Group>

                    <Divider label="Ou continue com o email" labelPosition="center" my="lg" />

                    <form onSubmit={() => {}}>
                        <Group direction="column" grow>
                            <TextInput required label="Email" placeholder="email@exemplo.game" />

                            <PasswordInput required label="Senha" placeholder="Sua senha" />
                        </Group>

                        <Group position="apart" mt="xl">
                            <Link href="/signup">
                                <Anchor component="button" type="button" color="gray" size="xs">
                                    Ainda sem conta? Faça seu registro aqui
                                </Anchor>
                            </Link>
                            <Button type="submit">Login</Button>
                        </Group>
                    </form>
                </Paper>
            </Group>
        </Container>
    );
};

export default SignIn;
