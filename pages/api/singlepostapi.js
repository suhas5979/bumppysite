// pages/api/singlepostapi.js
import fetch from 'node-fetch';
import FormData from 'form-data';
export default async function handler(req, res) {
    const { postid } = req.query;
    // const myHeaders = new Headers();
    // myHeaders.append("Cookie", "PHPSESSID=f12612fa68ba86a4133353e9c47f683a");
  
    const formdata = new FormData();
    formdata.append("single_post_id", postid);
  
    const requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
  
    try {
      res.setHeader('Cache-Control', 'no-cache');
      const apiResponse = await fetch("https://bumppy.com/api/testsinglepost.php", requestOptions);
      const result = await apiResponse.text();
      res.status(200).json({ result });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  