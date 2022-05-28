import API from './Api';

class ReportDataQualityApi {
  static getColumns() {
    return API.request({
      method: 'GET',
      url: 'api/v1/reportDataQuality/getColumns',
    });
  }

  static getList(params) {
    return API.request({
      method: 'GET',
      url: 'api/v1/reportDataQuality/getList',
      params,
    });
  }
}

export default ReportDataQualityApi;
