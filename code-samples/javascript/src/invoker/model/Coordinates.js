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

const ApiClient = require('../ApiClient')

/**
 * The Coordinates model module.
 * @module invoker/model/Coordinates
 * @version 1.0.0
 */
class Coordinates {
    /**
     * Constructs a new <code>Coordinates</code>.
     * @alias module:invoker/model/Coordinates
     */
    constructor() { 
        
        Coordinates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Coordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:invoker/model/Coordinates} obj Optional instance to populate.
     * @return {module:invoker/model/Coordinates} The populated <code>Coordinates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Coordinates();

            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('elevation')) {
                obj['elevation'] = ApiClient.convertToType(data['elevation'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Coordinates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Coordinates</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} latitude
 */
Coordinates.prototype['latitude'] = undefined;

/**
 * @member {Number} longitude
 */
Coordinates.prototype['longitude'] = undefined;

/**
 * @member {Number} elevation
 */
Coordinates.prototype['elevation'] = undefined;




module.exports = { Coordinates }

