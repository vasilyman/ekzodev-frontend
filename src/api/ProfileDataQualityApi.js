import API from './Api';

class ProfileDataQualityApi {
  static getColumns() {
    return API.request({
      method: 'GET',
      url: 'api/v1/profileDataQuality/getColumns',
    });
  }
}

export default ProfileDataQualityApi;
