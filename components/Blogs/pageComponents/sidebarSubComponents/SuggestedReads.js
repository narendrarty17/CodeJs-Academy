import { useState, useEffect } from "react";
import SuggestedReadList from "./SuggestedReadList";

const SuggestedReads = ({ id, type }) => {
    const [suggestedReads, setSuggestedReads] = useState(null);

    useEffect(() => {
        const fetchJsonData = async () => {
            try {
                if (id && type) {
                    // Dynamically import the JSON file based on id
                    const jsonModule = await import(`@/blogData/${type}/index.json`);
                    // Access the default export (JSON data)
                    console.log("data inside suggested.json: ", jsonModule.default);
                    const data = jsonModule.default.filter((el) => {
                        return el.id != parseInt(id);
                    });
                    console.log("Data inside filtered suggested.json:", data);
                    setSuggestedReads(data);
                }
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchJsonData();
    }, [id, type]);

    return (
        <>
            {suggestedReads && (
                <SuggestedReadList type={type} suggestedReads={suggestedReads} />
            )}
        </>
    )
};

export default SuggestedReads;