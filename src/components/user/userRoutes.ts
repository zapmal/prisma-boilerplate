import { Router } from 'express';

import {
  getUser,
  getUsers,
  postUser,
  deleteUser,
} from './userController';
import handler from '@utils/handler';

const router = Router();
const ROUTE_PREFIX = '/users';

router.get(`${ROUTE_PREFIX}/:id`,
  handler(getUser, (request, response) => (
    [Number(request?.params.id), response]
  )),
);

router.get(`${ROUTE_PREFIX}`,
  handler(getUsers, (_, response) => [response]),
);

router.post(`${ROUTE_PREFIX}`,
  handler(postUser, (request) => (
    [request?.body]
  )),
);

router.delete(`${ROUTE_PREFIX}/:id`,
  handler(deleteUser, (request, response) => (
    [Number(request?.params.id), response]
  )),
);

export default router;
