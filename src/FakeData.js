import React, { useEffect, useState } from 'react';

const FakeData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('homepageServices.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div>
            <h2>this is fake data page</h2>
        </div>
    );
};

export default FakeData;