import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JSONViewer() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        axios.get('db.json') // Assuming db.json is in your public folder
            .then(response => {
                setJsonData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div>
            
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
    );
}

export default JSONViewer;
