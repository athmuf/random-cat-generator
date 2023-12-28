const fetchRandomCat = async () => {
    const url = `${import.meta.env.VITE_APP_GENERATE_CAT_API}`;
    const options = {
      method: "GET",
      headers: {
        "x-api-key": `${import.meta.env.VITE_APP_X_API_KEY}`,
        "X-RapidAPI-Key": `${import.meta.env.VITE_APP_X_RAPID_API_KEY}`,
        "X-RapidAPI-Host": `${import.meta.env.VITE_APP_X_RAPID_API_HOST}`,
      },
    };
    let getData = {status: null, data: null}
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      getData.data = JSON.parse(result);
      getData.status = "success";
    } catch (error) {
      getData;
      getData.status = "failed";
      console.error(error);
    }
    return getData;
  };
  
  export { fetchRandomCat };
  