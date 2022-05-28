import { setupWorker } from 'msw';

import userHandler from './user/userHandler';
import ProfileDataQualityColumnsHandler from './ProfileDataQuality/ProfileDataQualityColumnsHandler';
import ProfileDataQualityListHandler from './ProfileDataQuality/ProfileDataQualityListHandler';
import ProfileDataQualityItemHandler from './ProfileDataQuality/ProfileDataQualityItemHandler';
import RegionsHandler from './Regions/RegionsHandler';
import ReportDataQualityColumnsHandler from './ReportDataQuality/ReportDataQualityColumnsHandler';
import ReportDataQualityListHandler from './ReportDataQuality/ReportDataQualityListHandler';

const handlers = [
  userHandler,
  ProfileDataQualityColumnsHandler,
  ProfileDataQualityListHandler,
  ProfileDataQualityItemHandler,
  RegionsHandler,
  ReportDataQualityColumnsHandler,
  ReportDataQualityListHandler,
];

export default setupWorker(...handlers);
