// pages/api/testallpost.js
import fetch from 'node-fetch';
import FormData from 'form-data';

export default async function handler(req, res) {
    const formData = new FormData();
    formData.append("cat", "entertainment");
    const requestOptions = {
        method: "POST",
        body: formData, 
        redirect: "follow",
    };

  

    try {
  
        const apiResponse = await fetch("https://bumppy.com/api/testcategory.php", requestOptions);

        const result = await apiResponse.text();

        res.status(200).json({ result });
    } catch (error) {
        console.error("Error fetching data:", error);

        res.status(500).json({ error: "Internal Server Error" });
    }
}
