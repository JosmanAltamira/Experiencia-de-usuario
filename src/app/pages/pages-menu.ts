import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Administrador',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Registro alumnos',
        link: '/pages/admin/smart-table-student',
        icon: 'edit-outline',
      },
      {
        title: 'Registro profesores',
        link: '/pages/admin/smart-table-teacher',
        icon: 'edit-outline',
      },
      {
        title: 'Registro Jefes de carrera',
        link: '/pages/admin/smart-table-manager',
        icon: 'edit-outline',
      },
    ],
  },
  {
    title: 'Jefe de carrera',
    icon: 'person-outline',
    children: [
            {
        title: 'Resultados Evaluaciones',
        link: '/pages/charts/echarts',
        icon: 'pie-chart-outline',
      },
      {
        title: 'Asignaciones',
        link: '/pages/admin/',
      },

    ],
  },
  {
    title: 'Alumnos',
    icon: 'award-outline',
    children: [
      {
        title: 'Tablero',
        link: '/pages/ui-features/anuncios',
        icon: 'grid-outline',
        badge: {
          text: '1+',
          status: 'warning',
        },
      },
      {
        title: 'Coevaluación',
        link: '/pages/admin/smart-table-coe',
        icon: 'clipboard-outline',
      },
    ],
  },
  {
    title: 'Profesores',
    icon: 'people-outline',
    children: [
      {
        title: 'Grupos',
        link: '/pages/teacher/tree-grid',
      },
      {
        title: 'Resultados',
        link: '/pages/charts/chartjs',
        icon: 'bar-chart-2-outline',
      },
      {
        title: 'Asignar de alumnos',
        link: '',
        
      },
    ],
  },
  {
    icon: 'log-in-outline',
    title: 'Cerrar sesión',
    link: '/auth/login',
  },
];
