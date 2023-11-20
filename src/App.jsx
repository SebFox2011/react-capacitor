import  {useCallback, useState} from 'react';

import {Button} from "@mui/material"
import { Geolocation } from '@capacitor/geolocation';

export default function GeolocationPage() {

  const [loc, setLoc] = useState(null);

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  return (
    <div className='grid place-content-center'>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <Button color='secondary' onClick={getCurrentPosition}>
        Get Current Location
      </Button>
      <Button variant='contained' color='primary' onClick={getCurrentPosition}>
        2 ème bouton
      </Button>
      </div>
  );
}