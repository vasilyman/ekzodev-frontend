import { rest } from 'msw';

import listData from './listData.json';

export default rest.get(
  '/api/v1/profileDataQuality/getList',
  (req, res, ctx) => res(ctx.delay(1400), ctx.status(200), ctx.json(listData)),
);
