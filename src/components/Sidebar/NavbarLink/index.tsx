import { Tooltip, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { useStyles } from './styles';

interface NavbarLinkProps {
    icon: IconType;
    name: string;
    active?: boolean;
    url?: string;
    onClick?(): void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ icon: Icon, name, active, url, onClick }) => {
    const { classes, cx } = useStyles();

    return (
        <Tooltip label={name} position="right" withArrow transitionDuration={0}>
            <Link href={url || ''}>
                <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                    <Icon />
                </UnstyledButton>
            </Link>
        </Tooltip>
    );
};

export default NavbarLink;
