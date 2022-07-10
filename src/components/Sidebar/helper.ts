import { FiHome } from 'react-icons/fi';
import { SiSteam, SiCounterstrike } from 'react-icons/si';

const MENU_ITEMS = [
    {
        name: 'Dashboard',
        url: '/app',
        icon: FiHome,
    },
    {
        name: 'Steam',
        url: '/app/steam',
        icon: SiSteam,
    },
    {
        name: 'Counter-Strike: Global Offensive',
        url: '/app/csgo',
        icon: SiCounterstrike,
    },
];

export { MENU_ITEMS };
