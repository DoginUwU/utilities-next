import { Anchor, Button, Container, Group, Paper, PasswordInput, Text, TextInput } from '@mantine/core';
import Link from 'next/link';

const SignUp = () => {
    return (
        <Container>
            <Group position="center" sx={{ height: '100vh' }}>
                <Paper radius="md" p="xl" withBorder>
                    <Text size="lg" weight={500} mb={10}>
                        Bem-vindo, faça seu registro para continuar
                    </Text>

                    <form onSubmit={() => {}}>
                        <Group direction="column" grow>
                            <TextInput required label="Email" placeholder="email@exemplo.game" />

                            <PasswordInput required label="Senha" placeholder="Sua senha" />
                            <PasswordInput required label="Confirmar senha" placeholder="Sua senha novamente" />
                        </Group>

                        <Group position="apart" mt="xl">
                            <Link href="/signin">
                                <Anchor component="button" type="button" color="gray" size="xs">
                                    Já tem uma conta? Faça seu login aqui
                                </Anchor>
                            </Link>
                            <Button type="submit">Registrar</Button>
                        </Group>
                    </form>
                </Paper>
            </Group>
        </Container>
    );
};

export default SignUp;
