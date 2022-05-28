import { rest } from 'msw';

import listData from './listData.json';

export default rest.get(
  '/api/v1/profileDataQuality/get/:id',
  (req, res, ctx) => {
    const item = listData.items.filter((i) => i.id === req.params.id)[0] || {};
    return res(ctx.delay(100), ctx.status(200), ctx.json(item));
  },
);
