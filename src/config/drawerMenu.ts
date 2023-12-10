import {
  Alert,
  Billing,
  Build,
  Dashboard,
  Devices,
  Hotspot,
  Key,
  Location,
  Network,
  Phone,
  Users,
} from './iconPaths'

export const drawerMenu = [
  {
    id: 1,
    name: 'Dashboard',
    icon: Dashboard,
    href: '/',
  },
  {
    id: 2,
    name: 'Networks',
    icon: Network,
    href: '/networks',
  },
  {
    id: 3,
    name: 'Devices',
    icon: Devices,
    href: '/devices',
  },
  {
    id: 4,
    name: 'Alerts',
    icon: Alert,
    href: '/alerts',
  },
  {
    id: 5,
    name: 'Firmwares',
    icon: Build,
    href: '/firmwares',
  },
  {
    id: 6,
    name: 'Clients',
    icon: Phone,
    href: '/clients',
  },
  {
    id: 7,
    name: 'Maps',
    icon: Location,
    href: '/maps',
  },
  {
    id: 8,
    name: 'Users',
    icon: Users,
    href: '/users',
  },
  {
    id: 9,
    name: 'Billing',
    icon: Billing,
    href: '/billing',
  },
  {
    id: 10,
    name: 'Hotspot profiles',
    icon: Hotspot,
    href: '/hotspot-profiles',
  },
  {
    id: 11,
    name: 'Guest Access',
    icon: Key,
    href: '/guest-access',
  },
]
