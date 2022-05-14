import { environment } from "../../environments/environment";

export const webServiceBaseUrl = environment.webBaseUrl;

// layout api
export const getLayout = webServiceBaseUrl + "getLayout";
export const createLayout = webServiceBaseUrl + "saveLayout";
export const updateLayout = webServiceBaseUrl + "updateLayout";
export const deleteLayout = webServiceBaseUrl + "deleteLayout";
// CCM api
export const getCCM = webServiceBaseUrl + "getCCM";
export const createCCM = webServiceBaseUrl + "saveCCM";
export const updateCCM = webServiceBaseUrl + "updateCCMName";
export const deleteCCM = webServiceBaseUrl + "deleteCCM";

// sizing api
export const getSize = webServiceBaseUrl + "getSize";
export const saveSize = webServiceBaseUrl + "saveSize";
export const updateCabinetSize = webServiceBaseUrl + "updateSize";
export const deleteCabinetSizing = webServiceBaseUrl + "deleteSize";

// scm api

export const getSCM = webServiceBaseUrl + "getSCM";
export const createSCM = webServiceBaseUrl + "saveSCM";
export const updateSCM = webServiceBaseUrl + "updateSCM";
export const deleteSCM = webServiceBaseUrl + "deleteSCM";
