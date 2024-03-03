const axios = require('axios')

async function fetchPlacesData(req,res){
    const {query, radius, minRating, type, openNow, notAddPreviouslyVisited} = req.query;
    const apiKey = AIzaSyB0_KJTIBmNOPO-eczEsaKcelygNtti9Kc;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

    if (radius) {
        apiUrl += `&radius=${radius}`;
    }
    if (minRating) {
        apiUrl += `&minrating=${minRating}`;
    }
    if (type) {
        apiUrl += `&type=${type}`;
    }
    if (openNow) {
        apiUrl += `&openNow${openNow}`;
    }
    if (notAddPreviouslyVisited) {
        apiUrl += `&notAddPreviouslyVisited=${notAddPreviouslyVisited}`;
    }

    try{
        const response = await axios.get(apiUrl);
        res.json(response.data);

    }catch (error){
        console.error('Error fetching data from Google Places API:', error);
        res.status(500).json({ error: 'An error occurred while fetching data from Google Places API' });
    }
}

module.exports ={
    fetchPlacesData
}