const submitBtn = document.getElementById("submit-btn");
const fileUpload = document.getElementById("uploadedFile");

const FILE_UPLOAD_API = 'http://localhost:4000/upload';

const uploadFile = async (formData) => {
  const response = await fetch(FILE_UPLOAD_API, {
    method: 'POST',
    body: formData,
  })

  const json = await response.json();
  console.log(json);
}

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const file = fileUpload.files[0];
  const fileToSend = new FormData();
  fileToSend.append('image', file);
  await uploadFile(fileToSend);
})