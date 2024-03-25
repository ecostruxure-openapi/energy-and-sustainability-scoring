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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/invoker/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/invoker/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EcoStruxureEnergySustainabilityScoringPartnerApi);
  }
}(this, function(expect, EcoStruxureEnergySustainabilityScoringPartnerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Site', function() {
    it('should create an instance of Site', function() {
      // uncomment below and update the code to test Site
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be.a(EcoStruxureEnergySustainabilityScoringPartnerApi.Site);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property sourceSystemId (base name: "sourceSystemId")', function() {
      // uncomment below and update the code to test the property sourceSystemId
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be();
    });

    it('should have the property postalAddress (base name: "postalAddress")', function() {
      // uncomment below and update the code to test the property postalAddress
      //var instance = new EcoStruxureEnergySustainabilityScoringPartnerApi.Site();
      //expect(instance).to.be();
    });

  });

}));
