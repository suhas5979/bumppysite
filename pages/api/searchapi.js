// pages/api/searchapi.js
import fetch from 'node-fetch';
import FormData from 'form-data';
export default async function handler(req, res) {
    try {
      // const myHeaders = new Headers();
      // myHeaders.append("Cookie", "PHPSESSID=f12612fa68ba86a4133353e9c47f683a");
  
      const { search_text } = req.query; // Get search_text from query parameters
  
      const formData = new FormData();
      formData.append("search_text", search_text || ""); // Use the received search_text
      formData.append("page", "1");
  
      const requestOptions = {
        method: "POST",
        // headers: myHeaders,
        body: formData,
        redirect: "follow",
      };
  
      const apiResponse = await fetch("https://bumppy.com/api/search.php", requestOptions);
      const result = await apiResponse.text();
      res.status(200).json({ result });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  