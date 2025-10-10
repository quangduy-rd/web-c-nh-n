// upload.js
async function uploadImage(file, folder = "uploads") {
  if (!file) {
    alert("Vui lòng chọn ảnh!");
    return null;
  }

  const fileName = `${folder}/${Date.now()}_${file.name}`;
  const storageRef = storage.ref(fileName);
  const snapshot = await storageRef.put(file);
  const url = await snapshot.ref.getDownloadURL();
  console.log("Uploaded file URL:", url);
  return url;
}

document.getElementById("fileInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const url = await uploadImage(file);
  if (url) document.getElementById("preview").src = url;
});
