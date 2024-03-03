// Function to perform Nearby Search using Google Places API
async function nearbySearch(keyword, radius, apiKey) {
    const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  
    // Convert spaces in the keyword to '+'
    const formattedKeyword = keyword.replace(/ /g, '+');
  
    // Build the API endpoint URL
    const url = `${apiUrl}?location=${latitude},${longitude}&radius=${radius}&keyword=${formattedKeyword}&key=${apiKey}`;
  
    try {
      // Make the API request using the fetch function
      const response = await fetch(url);
      const data = await response.json();
  
      // Check if the request was successful
      if (data.status === 'OK') {
        // Process the results
        const places = data.results;
        console.log('Nearby Places:', places);
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
  
  // Replace latitude and longitude with the actual coordinates
  const latitude = 37.7749; // Example latitude (San Francisco)
  const longitude = -122.4194; // Example longitude (San Francisco)
  
  nearbySearch(keyword, radius, apiKey);