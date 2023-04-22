import axios from "axios";

export const getPlacesData = async (type) => {
  try {
   const { data : {data}} = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: "-4.3217055",
          tr_latitude: "15.3125974",
          bl_longitude: "15.3125974",
          tr_longitude: "-4.3217055",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "a2204aedf3mshe6a88af86402b33p1b991cjsnc86f295cd8ac",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data
  } catch (error) {
    return null;
  }
};
