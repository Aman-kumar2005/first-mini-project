// Select elements
const nameInput = document.getElementById("name");
const dateInput = document.querySelector('input[type="date"]');
const emailInput = document.querySelector('input[type="email"]');
const contactInput = document.querySelector('#contact input');
const vehicleSelect = document.querySelector('#vechil select');
const fileInput = document.querySelector('input[type="file"]');
const submitBtn = document.querySelector(".xyz");

// Create image preview element
const previewImg = document.createElement("img");
previewImg.style.width = "120px";
previewImg.style.marginTop = "10px";
fileInput.parentElement.appendChild(previewImg);

// 📷 Photo preview
fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        previewImg.src = URL.createObjectURL(file);
    }
});

// ✅ Form validation
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        nameInput.focus();
        return;
    }

    if (dateInput.value === "") {
        alert("Please select a date");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email");
        emailInput.focus();
        return;
    }

    if (contactInput.value.trim() === "") {
        alert("Please enter your contact number");
        contactInput.focus();
        return;
    }

    if (vehicleSelect.selectedIndex === 0) {
        alert("Please select a vehicle");
        return;
    }

    alert("🎉 Form submitted successfully!");
});
