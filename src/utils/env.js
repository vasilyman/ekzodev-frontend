export const isMocked = () => process.env.VUE_APP_API_MOCKED === 'true';
export const getApiUrl = () => process.env.VUE_APP_API_URL;
export const isMockedProfile = () => process.env.VUE_APP_API_MOCKED_PROFILE_DATA === 'true';
export const isMockedReport = () => process.env.VUE_APP_API_MOCKED_REPORT_DATA === 'true';
