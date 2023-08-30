import { ImageList, ImageListItem } from '@mui/material';
import {useSelector} from "react-redux";

export const ImageGallery = ({ images }) => {

    const {imageUrls} = useSelector( state => state.journal.active);
    console.log('Image urls:',imageUrls);
    return (
        <ImageList sx={{ width: '100%', height: 500 }} cols={ 4 } rowHeight={25}>
            {images.map((image) => (
                <ImageListItem key={image}>
                    <img
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='Image from Cloudinary'
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
