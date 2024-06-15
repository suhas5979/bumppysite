import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqTextContent = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const storedFaqData = Cookies.get("faqData");

    if (storedFaqData) {
      const parsedData = [];
      const cookieKeys = Object.keys(Cookies.get());
      for (let i = 0; i < cookieKeys.length; i++) {
        const cookieValue = Cookies.get(cookieKeys[i]);
        if (cookieValue) {
          parsedData.push(JSON.parse(cookieValue));
        }
      }
      setFaqData(parsedData);
    } else {
      fetchData();
    }
  }, []);

  const fetchData = () => {
    fetch("https://apitranxt.bumppypay.com/api/admin/users/get_all_faq_list.aspx")
      .then((response) => response.json())
      .then((data) => { 
        console.log("API response:", data);
        setFaqData(data.data);

        for (let i = 0; i < data.data.length; i++) {
          const str = JSON.stringify(data.data[i]);
          console.log("data", str);
          Cookies.set(`faqData_${i}`, str, { expires: 7 }); // Set cookie to expire in 7 days
        }
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  };

  if (!Array.isArray(faqData) || faqData.length === 0) {
    return <div>No Data Found</div>;
  }

  return (
    <div className="faq-accordion">
      <Accordion allowZeroExpanded preExpanded={["a"]}>
        {faqData.map((item, index) => (
          <AccordionItem key={index} uuid={index.toString()}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-content">
                <p className="faq2">{item.answer}</p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqTextContent;













// for 1 min expiry

// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemPanel,
//   AccordionItemButton,
// } from "react-accessible-accordion";

// const FaqTextContent = () => {
//   const [faqData, setFaqData] = useState([]);

//   useEffect(() => {
//     const storedFaqData = Cookies.get("faqData");

//     if (storedFaqData) {
//       const parsedData = [];
//       const cookieKeys = Object.keys(Cookies.get());
//       for (let i = 0; i < cookieKeys.length; i++) {
//         const cookieValue = Cookies.get(cookieKeys[i]);
//         if (cookieValue) {
//           parsedData.push(JSON.parse(cookieValue));
//         }
//       }
//       setFaqData(parsedData);
//     } else {
//       fetchData();
//     }
//   }, []);

//   const fetchData = () => {
//     fetch("https://apitranxt.bumppypay.com/api/admin/users/get_all_faq_list.aspx")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("API response:", data);
//         setFaqData(data.data);

//         for (let i = 0; i < data.data.length; i++) {
//           const str = JSON.stringify(data.data[i]);
//           console.log("data", str);
//           const expirationDate = new Date();
//           expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 1000); // Set expiration time to 5 minutes from now
//           Cookies.set(`faqData_${i}`, str, { expires: expirationDate });
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching FAQ data:", error);
//       });
//   };

//   if (!Array.isArray(faqData) || faqData.length === 0) {
//     return <div>No Data Found</div>;
//   }

//   return (
//     <div className="faq-accordion">
//       <Accordion allowZeroExpanded preExpanded={["a"]}>
//         {faqData.map((item, index) => (
//           <AccordionItem key={index} uuid={index.toString()}>
//             <AccordionItemHeading>
//               <AccordionItemButton>{item.question}</AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel>
//               <div className="accordion-content">
//                 <p className="faq2">{item.answer}</p>
//               </div>
//             </AccordionItemPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </div>
//   );
// };

// export default FaqTextContent;
