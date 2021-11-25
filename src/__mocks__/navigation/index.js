import {
  BarChart as BarChartIcon,
  List,
  LogIn,
  LogOut,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Settings as SettingsIcon,
  //   AlertCircle as AlertCircleIcon,
  //   Lock as LockIcon,
  //   UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';

export const dataMaster = [
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Suppliers'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products',
    items: [
      {
        href: '/app/products',
        icon: List,
        title: 'Products'
      }
    ]
  }
];

export const dashboard = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  }
];

export const transaction = [
  {
    href: '/app/pemasukan',
    icon: LogIn,
    title: 'Barang Masuk'
  },
  {
    href: '/app/pengeluaran',
    icon: LogOut,
    title: 'Barang Keluar'
  }
];

export const userManagement = [
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  }
];
