import API from './Api';

class ProfileDataQualityApi {
  static getColumns() {
    return API.request({
      method: 'GET',
      url: 'api/v1/profileDataQuality/getColumns',
    });
  }

  static getList(params) {
    return API.request({
      method: 'GET',
      url: 'api/v1/profileDataQuality/getList',
      params,
    });
  }

  static getItem(id) {
    return API.request({
      method: 'GET',
      url: `api/v1/profileDataQuality/get/${id}`,
    });
  }
}

export default ProfileDataQualityApi;
