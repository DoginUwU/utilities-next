import { Avatar, Center, Group, Navbar as NavbarMantine } from '@mantine/core';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { MENU_ITEMS } from './helper';
import NavbarLink from './NavbarLink';
import { useStyles } from './styles';

const Sidebar: React.FC = () => {
    const { classes } = useStyles();

    const links = MENU_ITEMS.map((link) => <NavbarLink {...link} key={link.name} active={false} />);

    return (
        <NavbarMantine height={750} width={{ base: 80 }} p="md" className={classes.navbar}>
            <Center>
                <Avatar src="https://cdn.discordapp.com/attachments/880778290170834944/995713983870931035/e909a4578b24a726eea83137d06ab077.gif" />
            </Center>
            <NavbarMantine.Section grow mt={50}>
                <Group direction="column" align="center" spacing={0}>
                    {links}
                </Group>
            </NavbarMantine.Section>
            <NavbarMantine.Section>
                <Group direction="column" align="center" spacing={0}>
                    <NavbarLink icon={FiLogOut} name="Sair" />
                </Group>
            </NavbarMantine.Section>
        </NavbarMantine>
    );
};

export default Sidebar;
