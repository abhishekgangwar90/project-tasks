/* eslint-disable import/prefer-default-export */
export const parseError = (err) => {
  if (err && err.response) {
    return {
      error: err.response.data,
    };
  }
  return {
    error: 'Something Went Wrong, Please try after sometime.',
  };
};
