const main = document.querySelector("main");
const aside = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler");

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
