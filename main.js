/* main.js -- handles image previews, base64 conversion and submit
   Also registers the service worker if available.
*/

const form = document.getElementById("booking-form");
const msg = document.getElementById("statusMsg");
const submitBtn = document.getElementById("submitBtn");

const API_URL = "https://script.google.com/macros/s/AKfycbypZzfO3fDKyc8eCJRs-xzNRiFeicb3JFzk6LfXuCe4X0dMvh5Eh8Rfyl5YIQdMXz15/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    notes: document.getElementById("notes").value
  };

  submitBtn.disabled = true;
  submitBtn.textContent = "Saving...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    if (json.success) {
      msg.style.color = "green";
      msg.textContent = "Saved!";
      form.reset();
    } else {
      msg.style.color = "red";
      msg.textContent = json.error;
    }
  } catch (err) {
    msg.style.color = "red";
    msg.textContent = "Error: " + err.message;
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "Save";
});






/* main.js -- handles image previews, base64 conversion and submit */
/*const imagesInput = document.getElementById('images');
const imageGrid = document.getElementById('imageGrid');
const form = document.getElementById('booking-form');
const statusMsg = document.getElementById('statusMsg');
const submitBtn = document.getElementById('submitBtn');

let images = []; // {name, dataUrl, type}

imagesInput.addEventListener('change', (ev) => {
  const files = Array.from(ev.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.push({ name: file.name, dataUrl: e.target.result, type: file.type });
      renderImages();
    };
    reader.readAsDataURL(file);
  });
  // clear input to allow reselect same file
  imagesInput.value = '';
});

function renderImages() {
  imageGrid.innerHTML = '';
  images.forEach((img, idx) => {
    const div = document.createElement('div');
    div.className = 'thumb';
    div.innerHTML = `<img src="${img.dataUrl}" alt=""><div class="remove" data-idx="${idx}">×</div>`;
    imageGrid.appendChild(div);
  });
}

imageGrid.addEventListener('click', (e) => {
  if (e.target.matches('.remove')) {
    const idx = Number(e.target.dataset.idx);
    images.splice(idx, 1);
    renderImages();
  }
});*/

/* Replace with your deployed Apps Script Web App URL */
/*const APPS_SCRIPT_URL = 'REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // collect fields
  const payload = {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    email: document.getElementById('email').value.trim(),
    productType: document.getElementById('productType').value,
    quantity: document.getElementById('quantity').value.trim(),
    notes: document.getElementById('notes').value.trim(),
    images: images.map(i => i.dataUrl) // data URLs (base64)
  };

  // UI: submitting
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Saving... <span class="spinner"></span>';
  statusMsg.style.display = 'none';
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const json = await res.json();

    if (json.success) {
      statusMsg.style.display = 'block';
      statusMsg.style.color = 'green';
      statusMsg.textContent = 'Saved successfully. PDF: ' + json.pdfUrl;
      // Optionally open the pdf in a new tab
      if (json.pdfUrl) window.open(json.pdfUrl, '_blank');
      // reset form
      form.reset();
      images = [];
      renderImages();
    } else {
      throw new Error(json.error || 'Unknown server error');
    }
  } catch (err) {
    console.error(err);
    statusMsg.style.display = 'block';
    statusMsg.style.color = 'crimson';
    statusMsg.textContent = 'Error: ' + (err.message || err);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Save & Generate PDF';
  }
});*/



