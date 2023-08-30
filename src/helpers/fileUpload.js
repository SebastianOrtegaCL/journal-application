export const fileUpload = async( file ) => {
    if (!file) throw new Error('No file provided');
    const cloudURL = 'https://api.cloudinary.com/v1_1/dyeymvwje/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal', );
    formData.append('file', file);

    try {
        const response = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });
        if(!response.ok) throw new Error('file upload failed');
        const cloudResp = await response.json();

        return cloudResp.secure_url;
    }catch (e) {
        throw new Error(e.message);
    }
};