import { setupWorker } from 'msw';

import userHandler from './user/userHandler';
import ProfileDataQualityColumnsHandler from './ProfileDataQuality/ProfileDataQualityColumnsHandler';
import ProfileDataQualityListHandler from './ProfileDataQuality/ProfileDataQualityListHandler';
import RegionsHandler from './Regions/RegionsHandler';

const handlers = [
  userHandler,
  ProfileDataQualityColumnsHandler,
  ProfileDataQualityListHandler,
  RegionsHandler,
];

export default setupWorker(...handlers);
