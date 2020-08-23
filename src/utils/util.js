export const generateUrl = (endpoint, value) => {
  return `https://5eea30edb13d0a00164e4530.mockapi.io/myapi/ecomm/v1/${endpoint}/${value}`;
};

export const generateFinalData = (
  userResponse,
  affordabilityResponse,
  exposureResponse
) => {
  let affordibility_range =
    exposureResponse.values.reduce((total, item) => {
      return total + item;
    }, 0) * affordabilityResponse.affordability_min.value;

  return {
    name: userResponse.name,
    lastName: userResponse.last_name,
    affordibilityRange: affordibility_range.toFixed(2),
  };
};
