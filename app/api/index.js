// import axios from "axios";

// const api = axios.create({ baseURL: "https://apicms.ecommcube.com" });

const domain = "towingminneapolis.vercel.com";

export const getPageData = async (params) => {
  try {
    const response = await fetch(
      `https://apicms.ecommcube.com/api/site?${new URLSearchParams({
        domain,
        ...params,
      }).toString()}`,
      { next: { revalidate: 60 } }
    );
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
