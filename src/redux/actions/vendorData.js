import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
import {getUserData} from "./userData";

export const GET_VENDOR_DATA_START = "GET_VENDOR_DATA_START";
export const GET_VENDOR_DATA_END = "GET_VENDOR_DATA_END";
export const SET_VENDOR_DATA_START = "SET_VENDOR_DATA_START";
export const SET_VENDOR_DATA_END = "SET_VENDOR_DATA_END";
export const ERROR_GET_VENDOR_DATA = "ERROR_GET_VENDOR_DATA";
export const ERROR_SET_VENDOR_DATA = "ERROR_SET_VENDOR_DATA";
export const ERROR_INVALID_TOKEN = "ERROR_INVALID_TOKEN";

/*
object schema
vendor = 
{
    
    name: string, //broken down at this point
    description: string,
    facebook: string
    //image: string not in use
    market_type(1,2): int (private,public),
	name: string,
	operation:
	[{
		name: string, //date type
		start: 
		end: 
	}],
	website: string,
}


{
    "name": string,
    "description": string,
    "electricity": Bool,
    "facebook": string,
    "instagram": string,
    "items": null,
    "loud": Bool,
    "other_special": string,
    "twitter": string,
    "ventilation": Bool,
    "website": url
  }
*/
export const createNewVendor = (vendor) => dispatch => 
{
    dispatch({ type: SET_VENDOR_DATA_START });
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_VENDOR_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    vendor = cleanData(vendor);
    if(vendor.error) return dispatch({ type: ERROR_SET_VENDOR_DATA, payload: {error: vendor.error} });

    return axiosWithAuth(token)
    .post(`${HOST_URL}/vendors`, vendor)
    .then(res => {
        //getUserData(token)(dispatch); //fire another endpoint here so we can be quicker about gathering data
        dispatch({type: "GET_USER_DATA_END", payload: {userData: null, userType: "Vendor"}});
        dispatch({type: SET_VENDOR_DATA_END, payload: {vendorData: res.data}}); //fire this first so we dont get GET_START fire before GET_END
        
    })
    .catch(err =>{
        console.log(err);
        //check if bad token if so clear local data
        dispatch({ type: ERROR_SET_VENDOR_DATA, payload: {error: err} });
    })
}

export const getVendorById = (vendorId) => dispatch => 
{
    dispatch({ type: GET_VENDOR_DATA_START });    
    let token = localStorage.getItem("token");
    if(!token || !vendorId || vendorId < 1 || isNaN(vendorId)) {return dispatch({ type: SET_VENDOR_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .get(`${HOST_URL}/vendors/${vendorId}`)
    .then(res => {
        dispatch({type: GET_VENDOR_DATA_END, payload: {vendorData: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        console.error(err);
        dispatch({type: ERROR_GET_VENDOR_DATA,  payload: {error: err}});
    })
}

export const updateVendor = (vendor, vendorId) => dispatch => 
{
    dispatch({ type: GET_VENDOR_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !vendorId || vendorId < 1 || isNaN(vendor.id)) {return dispatch({ type: SET_VENDOR_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder

    vendor = cleanData(vendor);
    return axiosWithAuth(token)
    .put(`${HOST_URL}/vendors/${vendorId}`, vendor)
    .then(res => {
        dispatch({type: SET_VENDOR_DATA_END, payload: {vendorData: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_VENDOR_DATA,  payload: {error: err}});
    })
}

export const deleteVendor = (vendorId) => dispatch => 
{
    dispatch({ type: SET_VENDOR_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !vendorId || vendorId < 1 || isNaN(vendorId)) {return dispatch({ type: SET_VENDOR_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .put(`${HOST_URL}/vendors/${vendorId}`)
    .then(res => {
        dispatch({type: SET_VENDOR_DATA_END, payload: {vendorData: undefined}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        console.error(err);
        dispatch({type: ERROR_GET_VENDOR_DATA,  payload: {error: err}});
    })
}

function cleanData(vendor)
{
    vendor.items = Array.isArray(vendor.items) ? vendor.items : JSON.parse(vendor.items);
    let clean = 
    {   
        name: vendor.name,
        description: vendor.description,
        items: vendor.items && vendor.items !== "" ? vendor.items : [],
        electricity: vendor.electricty === "true" ? true: false,
        ventilation: vendor.ventilation  === "true" ? true : false,
 		loud: vendor.loud  === "true" ? true : false,
        other_special: vendor.other_special,
        facebook: vendor.facebook ? vendor.facebook : "",
        twitter: vendor.twitter ? vendor.twitter : "",
        instagram: vendor.instagram ? vendor.instagram : ""
    }

    
    if(vendor.website) clean.website = vendor.website;
    
    let required = ["name", "description"]
    let test = required.filter(x=> !clean[x] || clean[x].split(" ").join("") === "" || clean[x] === null);
    if(test.length > 0) return {error: `${test[0]} is a required field`}; //
    //This is a really complex way of seeing if any values in the clean that also live in required array (by key) are null undefined or "" " " "  " etc.
    
    // clean = JSON.stringify(clean);
    return clean;
}