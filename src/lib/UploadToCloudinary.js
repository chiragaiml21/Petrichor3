import axios from "axios";

export async function uploadToCloudinary(file) {
  try {
    console.log("File: ", file);
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post('/api/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Response: ", response);

    // Check if the request was successful
    if (response.status !== 200) {
      throw new Error('Failed to upload image');
    }

    // Assuming the server responds with the URL in the data object
    return response.data.url;
  } catch (error) {
    console.error("Error uploading image: ", error);
    throw error; // Rethrow or handle as needed
  }
}