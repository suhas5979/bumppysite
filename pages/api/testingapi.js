// pages/api/testingapi.js
import axios from 'axios';

export default async function handler(req, res) {
  const bodyData = {
    userid: "BR1004",
    creditcard: "5979",
    aadhaar: ""
  };

  try {
    const response = await axios.post("https://bumppy.in/api_integration/agent_concern/v1/getCreditCardDetails.php", bodyData);

    res.status(200).json({ result: response.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
