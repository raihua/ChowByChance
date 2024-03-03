// Function to perform Nearby Search using Google Places API
async function nearbySearch(keyword, radius, apiKey) {
    const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  
    // Convert spaces in the keyword to '+'
    const formattedKeyword = keyword.replace(/ /g, '+');
  
    // Build the API endpoint URL
    const url = `${apiUrl}?location=${latitude},${longitude}&radius=${radius}&keyword=${formattedKeyword}&maxprice=${maxPrice}&opennow=true&key=${apiKey}`;
  
    try {
      // Make the API request using the fetch function
      const response = await fetch(url);
      const data = await response.json();
  
      // Check if the request was successful
      if (data.status === 'OK') {
        // Process the results
        const places = data.results;
        // console.log('Nearby Places:', places);

        const placeDictionary = {};
        
        places.forEach(function(place){
          var nameValue = place.name;
          var rating = place.rating;
          var placeid = place.place_id;
          console.log('Name: ', nameValue, ' | Rating: ', rating, ' | Place ID: ', placeid);

          placeDictionary[placeid] = {
            name: nameValue,
            rating: rating,
            placeid: placeid
        };

        });

        console.log(placeDictionary)

      } else {
        console.error('Error:', data.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Example usage
  const keyword = 'restaurant';
  const radius = 1000; // Radius in meters
  const apiKey = 'AIzaSyB0_KJTIBmNOPO-eczEsaKcelygNtti9Kc';
  const maxPrice = 1
  
  // Replace latitude and longitude with the actual coordinates - example using mawson
  const latitude = -34.81589000;
  const longitude = 138.60809000;
  
  nearbySearch(keyword, radius, apiKey);