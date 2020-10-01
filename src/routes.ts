import Controller from './controller/Controller';

export const AppRoutes = [
  {
    path: '/mws',
    method: 'get',
    action: Controller.getAll,
  },
  {
    path: '/mws/:id',
    method: 'get',
    action: Controller.getById,
  },
  {
    path: '/mws',
    method: 'post',
    action: Controller.save,
  },
];
