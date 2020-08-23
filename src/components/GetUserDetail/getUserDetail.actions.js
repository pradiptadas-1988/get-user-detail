import { PERSON_DETAIL } from "./types";
import { generateUrl, generateFinalData } from "../../utils/util";

export const fetchUserDetail = (userId) => async (dispatch) => {
  const getUserUrl = generateUrl("person",userId);
  const userData = await fetch(getUserUrl);
  const userResponse = await userData.json();
  const getAffordabilityUrl = generateUrl("affordability",userResponse.affordability_id);
  const affordabilityData = await fetch(getAffordabilityUrl);
  const affordabilityResponse = await affordabilityData.json();
  const getExposureUrl = generateUrl("exposure",affordabilityResponse.affordability_min.exposure_id);
  const exposureData = await fetch(getExposureUrl);
  const exposureResponse = await exposureData.json();

  const finalData = generateFinalData(userResponse,affordabilityResponse, exposureResponse);

  dispatch({
    type: PERSON_DETAIL,
    payload: finalData,
  });

};
