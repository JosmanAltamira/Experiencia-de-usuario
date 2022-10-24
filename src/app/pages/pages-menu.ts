import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Administradores',
    group: true,
  },
  {
    title: 'Jefe de carrera',
    icon: 'person-outline',
    children: [
      {
        title: 'Registro',
        link: '/pages/admin/smart-table-manager',
      },
      {
        title: 'Resultados Grupos',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Resultados parciales',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: 'Profesores',
    icon: 'people-outline',
    link: '/pages/admin/smart-table-teacher',
  },
  {
    title: 'Alumnos',
    icon: 'award-outline',
    children: [
      {
        title: 'Anuncios',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Registro',
        link: '/pages/admin/smart-table-student',
      },
      {
        title: 'Coevaluación',
        link: '/pages/admin/smart-table-coe',
      },
    ],
  },
];
