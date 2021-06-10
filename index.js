const submitBtn = document.getElementById("submit-btn");
const fileUpload = document.getElementById("uploadedFile");
const message = document.getElementById("message");
const downloadBtn = document.getElementById("download-btn");

const FILE_UPLOAD_API = 'http://localhost:4000/upload';

const uploadFile = async (formData) => {
  const response = await fetch(FILE_UPLOAD_API, {
    method: 'POST',
    body: formData,
  })

  const json = await response.json();
  message.innerText = 'Your tiny image is ready!'

  downloadBtn.setAttribute("href", json.link);
  downloadBtn.innerText = 'Save me..!';
}

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  message.innerText = 'Please wait...';
  const file = fileUpload.files[0];
  const fileToSend = new FormData();
  fileToSend.append('image', file);
  await uploadFile(fileToSend);
})