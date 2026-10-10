import axiosService from "../api/axiosservice";

export const addBucketlistAPI=async(bucketlist)=>{
        return await axiosService('POST','/bucketList',bucketlist)
}
export const getCalenderdataAPI=async()=>{
        return await axiosService('GET','/bucketList')
}
export const updatedBucketlistAPI=async(id,bucketList)=>{
        return await axiosService('PUT', `/bucketList/${id}`,bucketList)
}
export const deleteBucketlistAPI=async(id)=>{
        return await axiosService('DELETE', `/bucketList/${id}`)
}
export const addToHistoryAPI=async(bucketList)=>{
        return await axiosService('POST',`/history`,bucketList)
}
export const getallHistoryAPI=async(bucketList)=>{
        return await axiosService('GET',`/history`,bucketList)
}

export const uploadToCloudinary = async (imgData) => {
  const formData = new FormData();

  formData.append("file", imgData);

  formData.append(
    "upload_preset",
    "travel_bucketlist"
  );

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/aaha7xjt/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  return response.json();
};

export const deleteDownloadstAPI = async (id) => {
  return await axiosService("DELETE", `/history/${id}`);
};