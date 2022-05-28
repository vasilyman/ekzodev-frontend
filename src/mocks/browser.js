import { setupWorker } from 'msw';
import { isMockedProfile, isMockedReport } from '@/utils/env';

import userHandler from './user/userHandler';
import ProfileDataQualityColumnsHandler from './ProfileDataQuality/ProfileDataQualityColumnsHandler';
import ProfileDataQualityListHandler from './ProfileDataQuality/ProfileDataQualityListHandler';
import ProfileDataQualityItemHandler from './ProfileDataQuality/ProfileDataQualityItemHandler';
import RegionsHandler from './Regions/RegionsHandler';
import ReportDataQualityColumnsHandler from './ReportDataQuality/ReportDataQualityColumnsHandler';
import ReportDataQualityListHandler from './ReportDataQuality/ReportDataQualityListHandler';

const handlers = [
  userHandler,
  RegionsHandler,
  ProfileDataQualityColumnsHandler,
  ReportDataQualityColumnsHandler,
];

if (isMockedProfile()) {
  handlers.push(
    ProfileDataQualityListHandler,
    ProfileDataQualityItemHandler,
  );
}

if (isMockedReport()) {
  handlers.push(
    ReportDataQualityListHandler,
  );
}

export default setupWorker(...handlers);
