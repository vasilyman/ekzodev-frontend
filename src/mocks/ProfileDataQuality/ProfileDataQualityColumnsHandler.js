import { rest } from 'msw';

import columnsData from './columnsData.json';

export default rest.get(
  '/api/v1/profileDataQuality/getColumns',
  (req, res, ctx) => res(ctx.delay(100), ctx.status(200), ctx.json(columnsData)),
);
