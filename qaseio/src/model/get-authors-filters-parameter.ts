/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface GetAuthorsFiltersParameter
 */
export interface GetAuthorsFiltersParameter {
    /**
     * Provide a string that will be used to search by name.
     * @type {string}
     * @memberof GetAuthorsFiltersParameter
     */
    'search'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAuthorsFiltersParameter
     */
    'type'?: GetAuthorsFiltersParameterTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum GetAuthorsFiltersParameterTypeEnum {
    APP = 'app',
    USER = 'user'
}


