const sendToApi = (data) => {
  return fetch("http://localhost:3000/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {
        success: false,
        error: "Se ha producido un error. Inténtelo más tarde",
      };
    });
};

const exportObject = {
  sendToApi: sendToApi,
};
export default exportObject;
