import { setupWorker } from 'msw';

import userHandler from './user/userHandler';
import ProfileDataQualityHandler from './ProfileDataQuality/ProfileDataQualityHandler';
import RegionsHandler from './Regions/RegionsHandler';

const handlers = [
  userHandler,
  ProfileDataQualityHandler,
  RegionsHandler,
];

export default setupWorker(...handlers);
