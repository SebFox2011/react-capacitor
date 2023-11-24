import {BiometryType, NativeBiometric} from '@capgo/capacitor-native-biometric'
import {
   Camera,
   CameraResultType
} from "@capacitor/camera"
import  {useCallback, useState} from 'react';

import {Button} from "@mui/material"
import { Geolocation } from '@capacitor/geolocation';

const setCredential = ()=>{
  // Save user's credentials
NativeBiometric.setCredentials({
  username: "username",
  password: "password",
  server: "www.example.com",
}).then();
}

async function performBiometricVerificatin(){

  const result = await NativeBiometric.isAvailable();

  if(!result.isAvailable) {
   alert("not available")
    return
  }

  const isFaceID = result.biometryType == BiometryType.FACE_ID;

  const verified = await NativeBiometric.verifyIdentity({
    reason: "For easy log in",
    title: "Log in",
    subtitle: "Maybe add subtitle here?",
    description: "Maybe a description too?",
  })
    .then(() => true)
    .catch(() => false);

  if(!verified) {
   alert("not verify")
    return
  }

  const credentials = await NativeBiometric.getCredentials({
    server: "www.example.com",
  });
  console.log(isFaceID,credentials)
}


export default function GeolocationPage() {
  console.log('start')

  const [loc, setLoc] = useState(null);
  const [photoFolder,setPhotoFolder]=useState([])
  const [imageUrl,setImageUrl]=useState('')

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  const getImages = useCallback(async()=>{
    const photos = await Camera.pickImages()
    setPhotoFolder(photos)
    console.log(photos)
  },[])

  const takePicture = useCallback (async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setImageUrl(image.webPath) ;
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
      {photoFolder?.photos?.map(picture=><img key={picture} width={'500'} src={picture.webPath} onClick={()=>getImages()}/>)}
      
      <Button variant='contained' color='secondary' onClick={()=>takePicture()}>
        Take photo
      </Button>
      {imageUrl?<img src={imageUrl}></img>:<></>}

      <Button variant='contained' color='secondary' onClick={setCredential}>
        Set credentials
      </Button>
      
      <Button variant='contained' color='secondary' onClick={performBiometricVerificatin}>
        Check biometry
      </Button>
      </div>
      
  );
}