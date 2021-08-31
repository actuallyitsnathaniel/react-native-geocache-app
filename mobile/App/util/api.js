const BASE_URL = "http://localhost:3000";

export const geoFetch = (path, options = {}) => {
  return fetch(`${BASE_URL}/api${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error("Something went wrong... please try again.");
    })
    .catch(error => {
      // global error capturing! v convenient
      console.warn("ERROR: ", `${BASE_URL}/api${path}`, error);

      throw new Error(error);
    });
};
