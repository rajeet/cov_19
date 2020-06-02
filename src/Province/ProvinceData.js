

import React, { useState, useEffect } from "react";


function ProvinceData() {
    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState({});

    const fetchData = async () => {
        const fetchedData = await fetch(
            "https://data.nepalcorona.info/api/v1/covid/summary"
        );
        const jsonFetchedData = await fetchedData.json();
        console.log(jsonFetchedData);
        setData(jsonFetchedData);
        console.log(data)
    }

    return (
        data
    )
}


export default ProvinceData