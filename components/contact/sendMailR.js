const sendMailR = async (form) => {
  const options = {
    method: "POST",
    body: JSON.stringify(form),
  };

  try {
    let response = await fetch("/api/contact", options);
    if(!response.ok)
    Promise.reject(response);
    let data = await response.json();
    return data;
  } catch(err) {
    return err;
  }
};

export default sendMailR;
