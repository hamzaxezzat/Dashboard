const main = document.querySelector("main");
const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const addProduct = document.querySelector(".add-product");

// On Mobile Sidebar open and close
{
    menuBtn.addEventListener("click", (eo) => {
        aside.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        aside.style.display = "none";
    });
}

// Change Theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    themeToggler.querySelectorAll("span")[0].classList.toggle("active");
    themeToggler.querySelectorAll("span")[1].classList.toggle("active");
});

Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
    <tr>
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
        order.shipping === "Pending"
            ? "warning"
            : order.shipping === "Declined"
            ? "danger"
            : "success"
    }">${order.shipping}</td>
    <td class="primary">Details</td>
</tr>
    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});

// Add Sales Analysis
addProduct.addEventListener("click", (eo) => {
    eo.parentElement.appendChild("sdsad");
});

// //

// <div class="item customers">
//                         <div class="icon">
//                             <span class="material-icons-sharp"> person </span>
//                         </div>
//                         <div class="right">
//                             <div class="info">
//                                 <h3>New Customers</h3>
//                                 <small class="text-muted">Last 25 Hours</small>
//                             </div>
//                             <h5 class="success">+19%</h5>
//                             <h3>1200</h3>
//                         </div>
//                     </div>
