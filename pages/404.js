import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import SinglePost from "./SinglePost";

const Error = () => {

    const router = useRouter();

    if (typeof window !== "undefined") {
        if (router && router.pathname.length > 2) {
            console.log(window);
            let route = window.location.pathname;
            if(route.slice(0, 1) === '/'){
              route = route.slice(1, route.length);
            }
            if(route.slice(-1) === '/'){
              route = route.slice(0, route.length - 1);
            }
            console.log(route);
            return <SinglePost slug={route} />;
          }
      }
      



    return (
      null
    );
}



export default Error;