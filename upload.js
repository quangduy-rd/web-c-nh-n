// --- Hàm upload ảnh ---
async function uploadImage() {
  const fileInput = document.getElementById("fileInput");
  const uploadStatus = document.getElementById("uploadStatus");
  const uploadedImage = document.getElementById("uploadedImage");

  if (fileInput.files.length === 0) {
    uploadStatus.textContent = "Vui lòng chọn một file ảnh trước.";
    return;
  }

  const file = fileInput.files[0];
  const fileName = Date.now() + "_" + file.name; // tránh trùng tên
  const storageRef = storage.ref("uploads/" + fileName);

  uploadStatus.textContent = "⏳ Đang tải ảnh lên...";

  try {
    // Upload lên Firebase
    const snapshot = await storageRef.put(file);
    const downloadURL = await snapshot.ref.getDownloadURL();

    uploadStatus.textContent = "✅ Tải lên thành công!";
    uploadedImage.src = downloadURL;
    uploadedImage.style.display = "block";

    console.log("Ảnh tải lên:", downloadURL);
  } catch (error) {
    uploadStatus.textContent = "❌ Lỗi khi tải ảnh: " + error.message;
  }
}
