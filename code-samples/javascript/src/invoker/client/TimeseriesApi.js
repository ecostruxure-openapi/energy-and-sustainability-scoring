/**
 * EcoStruxure™ Energy & Sustainability Scoring Partner API
 * # Overview    EcoStruxure™ Energy and Sustainability Scoring Partner API allows Building Performance Scores Providers to collect, manage and benchmark buildings measurement data in order to deliver energy and sustainability performance scoring to their customers.    ## API overview and usage    This API enables the following features:      **Sites metadata**  - Retrieve all sites belonging to which the connected user has access, along site metadata needed for performance scores calculation (e.g. gross area, building occupants, operating hours, etc)      **Meters and measurement types**  - Retrieve all meters installed at a given site, including the list of measurements and units they support    **Sites registration**  - Allows the Scoring Partner, to register a site providing the scores related details and thus starting automatically a data pipeline to collect all timeseries related information    **Time series**  - Retrieve all timeseries for any given site and for an arbitrary time period  - Room comfort data: zone temperature, humidity, CO2  - Energy consumption: active energy (kWh), reactive energy (kVar)     **Performance Scores**  * Provide Performance Scores for a given site and read current and historical scores  * Supported Types: Daily, Monthly, Average, Local Average   * Supported Categories: Energy, Water, Waste, Transportation, Human Experience, Re-Entry      ## How it works    This API works for any Energy and Sustainability Scoring application that has a registered Schneider Electric(SE) Customer with an identity in Schneider Electric cIAM system.    The following steps will explain how the API works,    **Step 1:** In order to access the SE customer data, the customer have to provide their consent to the scoring application which is initiated by the application using API security defined in the schema    **Step 2:** Enquire all the sites which the customer is authorized to calculate the performance scores    **Step 3:** Enquire meters and timeseries measurements for a selected site    **Step 4:** Calculate the scores based on the building measurement data received from SE    **Step 5:** Update the performance scores calculated for the given site back to SE       ![How it works](https://raw.githubusercontent.com/ecostruxure-openapi/public-images/main/energy-sustainability-scoring/how-it-works-new.png \"How it works\")      # Documentation        ## How to sign up        **Step 1:** [Register or login](https://exchange.se.com) with an Exchange account.    **Step 2:** Subscribe to the [API product in our Shop](https://exchange.se.com).    **Step 3:** After subscription, API credentials and usage details for the API are available in developer portal.    ## Authentication guide    This API supports the following authentication mechanism:    **OAuth2 Authorization Code Flow**       Once subscription to the API is approved on [Exchange](https://exchange.se.com), API Subscription Client ID and Client Secret will be shared with the subscriber       The Client ID should be sent when calling the Authorize Endpoint to initiate the Authorization and Consent flow.        Once user consents to the scopes requested by the client app, an authorization code will be issued which needs to be sent to the Token Endpoint with grant_type as *authorization_code*, along with Client ID and Client Secret in order to retrieve an access_token and a refresh_token. In order to retrieve a new access_token, call the Token endpoint with grant_type as *refresh_token* and pass the refresh_token issued before.        Each access_token is valid for 1 hour and has to be provided to every API call as HTTP Request Header `Authorization: Bearer {access_token}`       ![Authorization Code Flow diagram](https://raw.githubusercontent.com/ecostruxure-openapi/public-images/main/energy-sustainability-scoring/authorization_flow.png \"Authorization Code Flow diagram\")    ## Operations and Resource Model    ![Operations and Resource Model diagram](https://raw.githubusercontent.com/ecostruxure-openapi/public-images/main/energy-sustainability-scoring/open-esx-energy-scoring.diagram.png \"Operations and Resource Model diagram\")      ## Support    Contact the SE Exchange support team at exchange.support@se.com and include.        - Endpoint URL      - Request/Response of the URL      - Any additional information like Screenshots, Postman collections    ---
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Timeserie from '../model/Timeserie';

/**
* Timeseries service.
* @module invoker/client/TimeseriesApi
* @version 1.0.0
*/
export default class TimeseriesApi {

    /**
    * Constructs a new TimeseriesApi. 
    * @alias module:invoker/client/TimeseriesApi
    * @class
    * @param {module:invoker/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:invoker/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listMetrics operation.
     * @callback module:invoker/client/TimeseriesApi~listMetricsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:invoker/model/Timeserie>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Timeseries
     * Get all building measurement data to calculate scores
     * @param {String} siteId 
     * @param {Object} opts Optional parameters
     * @param {Date} [updatedAtGte] 
     * @param {Date} [updatedAtLt] 
     * @param {module:invoker/client/TimeseriesApi~listMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:invoker/model/Timeserie>}
     */
    listMetrics(siteId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling listMetrics");
      }

      let pathParams = {
        'site-id': siteId
      };
      let queryParams = {
        'updatedAt[gte]': opts['updatedAtGte'],
        'updatedAt[lt]': opts['updatedAtLt']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Oauth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Timeserie];
      return this.apiClient.callApi(
        '/sites/{site-id}/timeseries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
