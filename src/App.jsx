import  {useCallback, useState} from 'react';

import {Button} from "@mui/material"
import {Camera} from "@capacitor/camera"
import { Geolocation } from '@capacitor/geolocation';
import { Keyboard } from '@capacitor/keyboard';

export default function GeolocationPage() {

  const [loc, setLoc] = useState(null);
  const [photoFolder,setPhotoFolder]=useState([])

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  const getImages = useCallback(async()=>{
    const photos = await Camera.pickImages()
    setPhotoFolder(photos)
    console.log(photos)
  },[])

  return (
    <div className='grid place-content-center gap-5'>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <Button color='secondary' onClick={getCurrentPosition}>
        Get Current Location
      </Button>
      <Button variant='contained' color='primary' onClick={getImages}>
        Open file system
      </Button>
      <Button variant='contained' color='secondary' onClick={()=>Keyboard.show()}>
        Open keyboard
      </Button>
      {photoFolder?.photos?.map(picture=><img key={picture} width={'500'} src={picture.webPath} onClick={()=>getImages()}/>)}
      </div>
      
  );
}