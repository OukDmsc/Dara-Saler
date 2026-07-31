const STORAGE_KEYS = {
  catalog: "catalogItems"
};

const items = [
  { id: 1, name: "ទា1.1", price: 58000, stock: 1000 },
  { id: 2, name: "ត្រីមូល", price: 6500, stock: 1000 },
  { id: 3, name: "ត្រីឆ្លាត", price: 6000, stock: 1000 },
  { id: 4, name: "គូទមាន់", price: 6500, stock: 1000 },
  { id: 5, name: "ស្លាបមាន់sadia", price: 6500, stock: 1000 },
  { id: 6, name: "ស្លាបខ្លី", price: 14000, stock: 1000 },
  { id: 7, name: "កោះមាន់", price: 9500, stock: 1000 },
  { id: 8, name: "ភ្លៅមាន់", price: 10500, stock: 1000 },
  { id: 9, name: "ជើងមាន់Aviva", price: 7800, stock: 1000 },
  { id: 10, name: "បន្លែបន្ទះ", price: 13500, stock: 1000 },
  { id: 11, name: "នំឈីស", price: 15000, stock: 1000 },
  { id: 12, name: "មីសួរដើម", price: 11500, stock: 1000 },
  { id: 13, name: "មីសួរដើមតូច", price: 13000, stock: 1000 },
  { id: 14, name: "គ្រាប់ខ្នុល", price: 14000, stock: 1000 },
  { id: 15, name: "CHOJO16ដើម", price: 13700, stock: 1000 },
  { id: 16, name: "CHOJOនំប៉ាវ", price: 13500, stock: 1000 },
  { id: 17, name: "ស្លាបវែង", price: 11000, stock: 1000 },
  { id: 18, name: "អណ្ដាត", price: 12500, stock: 1000 },
  { id: 19, name: "ប្រហិតបង្គា", price: 14500, stock: 1000 },
  { id: 20, name: "ក្ដាមធំ១២ដើម", price: 14500, stock: 1000 },
  { id: 21, name: "តៅហ៊ូជ្រុង", price: 12000, stock: 1000},
  { id: 22, name: "គាវ", price: 112000, stock: 1000 },
  { id: 23, name: "ចាំបូមាស", price: 11000, stock: 1000 },
  { id: 24, name: "ប៉ាតេក្ដាម", price: 9000, stock: 1000 },
  { id: 25, name: "សាច់ក្រក់ធំ", price: 11500, stock: 1000 },
  { id: 26, name: "chojoមឺកខ្លី", price: 14000, stock: 1000 },
  { id: 27, name: "កន្សោមពង", price: 15000, stock: 1000 },
  { id: 28, name: "chojoមឺកក្រហម", price: 13500, stock: 1000 },
  { id: 29, name: "ឈីសតូច21ដើម", price: 14500, stock: 1000 },
  { id: 31, name: "ឈីសធំ26ដើម", price: 14500, stock: 1000 },
  { id: 32, name: "'ដកpm", price: 12000, stock: 1000 },
  {id: 33, name: "ត្រចៀក", price: 12500, stock: 1000 },
  {id: 34, name: "ក្បាលពោះវៀន", price: 10000, stock: 1000},
  {id: 35, name: "CP16", price: 11500, stock: 1000},
  {id: 36, name: "CP40", price: 11500, stock: 1000},
  {id: 37, name: "ត្រីHP", price: 10500, stock: 1000},
  {id: 38, name: "ត្រីបន្លែ", price: 10500, stock: 1000},
  {id: 39, name: "តៅហ៊ូចៀន", price: 13500, stock: 1000},
  {id: 40, name: "បង្គា", price: 14500, stock: 1000},
  {id: 41, name: "ចាំបូ20", price: 11000, stock: 1000},  
  {id: 42, name: "គោលេច4", price: 111111, stock: 1000},
  {id: 43, name: "ជើងជ្រូកមូល", price: 11000, stock: 1000},
  {id: 44, name: "ត្រីស", price: 10000, stock: 1000},
  {id: 45, name: "បន្លែពណ៏", price: 10500, stock: 1000},
  {id: 46, name: "បន្លែស្លឹកខ្ទឹម", price: 10000, stock: 1000},
  {id: 47, name: "ជើងទាខ", price: 9800, stock: 1000},
  {id: 48, name: "ដក AM", price: 11500, stock: 1000},
  {id: 49, name: "ដក PM", price: 11500, stock: 1000},
  {id: 50, name: "ប៉ាទេ cp", price: 11600, stock: 1000},
  {id: 51, name: "ជើង P83", price: 7500, stock: 1000}
];

const receipts = [];
const selectedItems = [];
let showSavedReceipt = true;
const ADMIN_ROLES = new Set(["owner", "admin", "dev"]);
const ROLE_CREDENTIALS = {
  owner: { name: "dara", password: "dara67123" },
  admin: { name: "ddomm7", password: "ddomm7123" },
  dev: { name: "dev", password: "ddomm7123" }
};
const itemsGrid = document.getElementById("itemsGrid");
const receiptItemSelect = document.getElementById("receiptItem");
const receiptPreview = document.getElementById("receiptPreview");
const receiptForm = document.getElementById("receiptForm");
const customerNameInput = document.getElementById("customerName");
const receiptQtyInput = document.getElementById("receiptQty");
const createReceiptBtn = document.getElementById("createReceiptBtn");
const resetReceiptBtn = document.getElementById("resetReceiptBtn");
const receiptCard = document.querySelector(".receipt-card");
const roleButtons = Array.from(document.querySelectorAll(".role-btn"));
const loginPanel = document.getElementById("loginPanel");
const loginTitle = document.getElementById("loginTitle");
const loginNameInput = document.getElementById("loginName");
const loginPasswordInput = document.getElementById("loginPassword");
const loginSubmitBtn = document.getElementById("loginSubmit");
const loginCancelBtn = document.getElementById("loginCancel");
const loginStatusText = document.getElementById("loginStatus");
let currentRole = "customer";
let pendingRole = null;

function getCurrentRole() {
  return currentRole;
}

function canUseAdminControls() {
  return ADMIN_ROLES.has(getCurrentRole());
}

function showLoginPanel(role) {
  pendingRole = role;
  if (loginTitle) {
    loginTitle.textContent = `${role[0].toUpperCase()}${role.slice(1)} login`;
  }
  if (loginPanel) {
    loginPanel.classList.remove("hidden");
  }
  if (loginStatusText) {
    loginStatusText.textContent = "";
  }
  if (loginNameInput) {
    loginNameInput.value = "";
    loginNameInput.focus();
  }
  if (loginPasswordInput) {
    loginPasswordInput.value = "";
  }
}

function hideLoginPanel() {
  pendingRole = null;
  if (loginPanel) {
    loginPanel.classList.add("hidden");
  }
  if (loginStatusText) {
    loginStatusText.textContent = "";
  }
}

function setRoleAccess() {
  const isAdmin = canUseAdminControls();
  const formControls = [receiptForm, receiptItemSelect, receiptQtyInput, customerNameInput, createReceiptBtn, resetReceiptBtn];

  roleButtons.forEach((button) => {
    const isActive = button.dataset.role === currentRole;
    button.classList.toggle("is-active", isActive);
  });

  if (receiptCard) {
    receiptCard.style.display = isAdmin ? "block" : "none";
  }

  formControls.forEach((element) => {
    if (!element) return;
    element.disabled = !isAdmin;
    if (element.tagName === "FORM" || element.tagName === "SELECT" || element.tagName === "INPUT" || element.tagName === "BUTTON") {
      element.style.opacity = isAdmin ? "1" : "0.5";
    }
  });

  if (!isAdmin) {
    selectedItems.length = 0;
    receiptPreview.innerHTML = "";
  }
}

function authenticateRole(role) {
  const credentials = ROLE_CREDENTIALS[role];
  if (!credentials) {
    currentRole = role;
    setRoleAccess();
    return;
  }

  showLoginPanel(role);
}

function submitRoleLogin() {
  const role = pendingRole;
  const credentials = ROLE_CREDENTIALS[role];

  if (!credentials || !loginNameInput || !loginPasswordInput || !loginStatusText) {
    return;
  }

  const enteredName = loginNameInput.value.trim().toLowerCase();
  const enteredPassword = loginPasswordInput.value;

  if (!enteredName || !enteredPassword) {
    loginStatusText.textContent = "Please enter both login name and password.";
    return;
  }

  if (enteredName === credentials.name && enteredPassword === credentials.password) {
    currentRole = role;
    hideLoginPanel();
    setRoleAccess();
    renderItems();
    renderReceipt();
    return;
  }

  loginStatusText.textContent = "Incorrect login name or password.";
  currentRole = "customer";
  setRoleAccess();
}

function loadItemsFromLocalStorage() {
  const savedItems = localStorage.getItem(STORAGE_KEYS.catalog);
  if (!savedItems) {
    saveItemsToLocalStorage();
    return;
  }

  try {
    const parsedItems = JSON.parse(savedItems);
    if (!Array.isArray(parsedItems)) {
      saveItemsToLocalStorage();
      return;
    }

    parsedItems.forEach((savedItem) => {
      const currentItem = items.find((item) => item.id === savedItem.id);
      if (!currentItem) return;

      currentItem.name = savedItem.name || currentItem.name;
      currentItem.price = Number(savedItem.price) || currentItem.price;
      currentItem.stock = Number(savedItem.stock) || currentItem.stock;
    });
  } catch (error) {
    console.error("Error loading catalog from localStorage:", error);
    saveItemsToLocalStorage();
  }
}

function saveItemsToLocalStorage() {
  localStorage.setItem(STORAGE_KEYS.catalog, JSON.stringify(items));
}

function populateSelects() {
  const options = items
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
  receiptItemSelect.innerHTML = options;

  const firstItem = items[0];
  if (firstItem) {
    receiptItemSelect.value = firstItem.id;
  }
}

function renderItems() {
  const isAdmin = canUseAdminControls();
  itemsGrid.innerHTML = items
    .map(
      (item) => `
        <article class="item-card" data-item-id="${item.id}">
          <h3>${item.name}</h3>
          <div class="price-display">${item.price.toLocaleString()}៛</div>
          ${isAdmin ? `
            <div class="price-editor-row">
              <input class="price-input" type="number" min="0" value="${item.price}" data-item-id="${item.id}" />
              <button type="button" class="save-price-btn" data-item-id="${item.id}">Save</button>
            </div>
          ` : ""}
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".item-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (!isAdmin) {
        return;
      }

      if (event.target.closest(".price-input") || event.target.closest(".save-price-btn")) {
        return;
      }

      const itemId = Number(card.getAttribute("data-item-id"));
      const item = items.find((entry) => entry.id === itemId);
      if (!item) return;
      receiptItemSelect.value = item.id;
      receiptQtyInput.value = 1;
      const enteredName = customerNameInput.value.trim();
      customerNameInput.value = enteredName;
      addSelectedItem(item, 1, enteredName);
    });
  });

  if (!isAdmin) {
    return;
  }

  document.querySelectorAll(".save-price-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const itemId = Number(button.getAttribute("data-item-id"));
      const item = items.find((entry) => entry.id === itemId);
      if (!item) return;

      const priceInput = button.parentElement?.querySelector(".price-input");
      if (!priceInput) return;

      const newPrice = Number(priceInput.value);
      if (!Number.isFinite(newPrice) || newPrice < 0) {
        alert("Please enter a valid price.");
        return;
      }

      item.price = newPrice;
      selectedItems.forEach((entry) => {
        if (entry.itemId === item.id) {
          entry.price = item.price;
          entry.total = entry.price * entry.quantity;
        }
      });
      saveItemsToLocalStorage();
      renderItems();
      renderReceipt();
    });
  });

  document.querySelectorAll(".price-input").forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const itemId = Number(input.getAttribute("data-item-id"));
      const item = items.find((entry) => entry.id === itemId);
      if (!item) return;

      const newPrice = Number(input.value);
      if (!Number.isFinite(newPrice) || newPrice < 0) {
        alert("Please enter a valid price.");
        return;
      }

      item.price = newPrice;
      selectedItems.forEach((entry) => {
        if (entry.itemId === item.id) {
          entry.price = item.price;
          entry.total = entry.price * entry.quantity;
        }
      });
      saveItemsToLocalStorage();
      renderItems();
      renderReceipt();
    });
  });
}

function getReceiptMarkup(receipt) {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const isDraft = receipt.receiptNo === "DRAFT";
  const customerNameText = receipt.customerName && receipt.customerName.trim() && receipt.customerName !== "Customer"
    ? receipt.customerName
    : "...........";
  const receiptNoText = isDraft ? "............" : receipt.receiptNo;
  const totalQty = receipt.items.reduce((sum, entry) => sum + entry.quantity, 0);
  const exchangeRate = 4100; // 1 USD = 4100 Riel
  const totalUsd = (receipt.total / exchangeRate).toFixed(2);
  const itemsMarkup = receipt.items.length
    ? receipt.items
        .map((entry) => {
          // If this is a placeholder (no real itemId), render a non-editable placeholder row
          if (!entry.itemId) {
            return `
            <div class="receipt-row receipt-item-row">
              <div class="receipt-item-info">
                <span><strong>${entry.itemName || "..........."}</strong></span>
              </div>
              <span class="receipt-item-total">${entry.total ? entry.total.toLocaleString() + '៛' : ''}</span>
            </div>
          `;
          }

          // Editable row for draft receipts: quantity input + remove button
          return `
            <div class="receipt-row receipt-item-row" data-item-id="${entry.itemId}">
              <div class="receipt-item-info">
                <div style="display:flex;align-items:center;gap:8px;">
                  <strong>${entry.itemName}</strong>
                  <input class="draft-qty" type="number" min="0" value="${entry.quantity}" data-item-id="${entry.itemId}" style="width:70px;padding:6px;border-radius:6px;border:1px solid #e5e7eb;" />
                  <button class="draft-remove" data-item-id="${entry.itemId}" style="padding:6px 8px;border-radius:6px;background:#ef4444;color:#fff;border:none;cursor:pointer;visibility:hidden;">&nbsp;</button>
                </div>
                <div class="receipt-item-meta">Unit: ${entry.price.toLocaleString()}៛</div>
              </div>
              <span class="receipt-item-total">${entry.total.toLocaleString()}៛</span>
            </div>
          `;
        })
        .join("")
    : "";

  return `
    <div class="receipt-paper">
      <p class="receipt-title">${isDraft ? "Draft Preview" : "តារា សាឡឺ"}</p>
      <div class="receipt-header">
        <div class="receipt-meta receipt-meta-left">
          <p><strong>Customer Name:</strong> ${customerNameText}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>ឃ្លាំង:</strong> A29 A30</p>
        </div>
        <div class="receipt-meta receipt-meta-right">
          <p><strong>Receipt No:</strong> ${receiptNoText}</p>
          <p><strong>Seller:</strong> តារា​</p>
          <p><strong>Tell:</strong> 097 885 8784</p>
        </div>
      </div>
      ${itemsMarkup}
      <div class="receipt-row qty-row">
        <span>សរុបចំនួន</span>
        <span>${totalQty}</span>
      </div>
      <div class="receipt-row total-row">
        <span>Total Riel</span>
        <span>${receipt.total.toLocaleString()}៛</span>
      </div>
      <div class="receipt-row total-row">
        <span>Total Dollar</span>
        <span>$ ${totalUsd}</span>
      </div>
      <div class="signature-row">
        <div class="signature-box">
          <p>Seller Signature</p>
          <div class="signature-line"></div>
        </div>
        <div class="signature-box">
          <p>Customer Signature</p>
          <div class="signature-line"></div>
        </div>
      </div>
      <div class="receipt-location">Location: ភូមិ...... សង្កាត់...... ស្រុក...... ខេត្ត......</div>
    </div>
  `;
}

function getDraftReceipt() {
  const customerName = customerNameInput.value.trim();
  const draftItems = selectedItems.map((entry) => ({ ...entry }));
  const total = draftItems.reduce((sum, entry) => sum + (entry.total || 0), 0);

  return {
    customerName,
    receiptNo: "DRAFT",
    items: draftItems,
    total,
    date: new Date().toLocaleString()
  };
}

function renderReceipt() {
  const customerName = customerNameInput.value.trim();

  if (!showSavedReceipt) {
    if (!customerName || !selectedItems.length) {
      receiptPreview.innerHTML = `<div class="empty-receipt-message"><p>Enter customer name and add at least one item to show the receipt preview.</p></div>`;
      return;
    }

    const draftReceipt = getDraftReceipt();
    receiptPreview.innerHTML = getReceiptMarkup(draftReceipt);
    attachDraftListeners();
    return;
  }

  // When showing saved receipts, fallback to draft if no history exists.
  if (!receipts.length) {
    if (!customerName || !selectedItems.length) {
      receiptPreview.innerHTML = `<div class="empty-receipt-message"><p>Enter customer name and add at least one item to show the receipt preview.</p></div>`;
      return;
    }

    const draftReceipt = getDraftReceipt();
    receiptPreview.innerHTML = getReceiptMarkup(draftReceipt);
    attachDraftListeners();
    return;
  }

  const receipt = receipts[receipts.length - 1];
  receiptPreview.innerHTML = getReceiptMarkup(receipt);
}

function attachDraftListeners() {
  // Quantity change listeners
  document.querySelectorAll('.draft-qty').forEach((input) => {
    input.addEventListener('change', (e) => {
      const id = Number(e.target.getAttribute('data-item-id'));
      let qty = Number(e.target.value) || 0;
      const entry = selectedItems.find((it) => it.itemId === id);
      if (!entry) return;
      if (qty < 0) qty = 0;
      entry.quantity = qty;
      entry.total = entry.price * entry.quantity;
      renderItems();
      renderReceipt();
    });
  });

  // Remove item listeners
  document.querySelectorAll('.draft-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.getAttribute('data-item-id'));
      const idx = selectedItems.findIndex((it) => it.itemId === id);
      if (idx === -1) return;
      selectedItems.splice(idx, 1);
      renderItems();
      renderReceipt();
    });
  });
}

function addSelectedItem(item, qty, customerName) {
  const safeQty = Number(qty) || 1;

  const existingItem = selectedItems.find((entry) => entry.itemId === item.id);
  const newQuantity = existingItem ? existingItem.quantity + safeQty : safeQty;

  if (item.stock < newQuantity) {
    alert("Not stock.");
    return;
  }

  if (existingItem) {
    existingItem.quantity = newQuantity;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    selectedItems.push({
      customerName: customerName || "Customer",
      itemName: item.name,
      itemId: item.id,
      quantity: safeQty,
      price: item.price,
      total: item.price * safeQty
    });
  }

  renderItems();
  renderReceipt();
}

function createReceipt() {
  const customerName = customerNameInput.value.trim();
  if (!customerName) {
    alert("Please enter the customer name before saving the receipt.");
    customerNameInput.focus();
    return;
  }

  if (!selectedItems.length) {
    alert("Add at least one item before creating the receipt.");
    return;
  }

  const total = selectedItems.reduce((sum, entry) => sum + entry.total, 0);
  const receiptNo = `${selectedItems[0].itemId}-${Date.now().toString().slice(-4)}`;
  const savedReceipt = {
    customerName,
    receiptNo,
    items: selectedItems.map((entry) => ({ ...entry })),
    total,
    date: new Date().toLocaleString()
  };

  selectedItems.forEach((entry) => {
    const item = items.find((product) => product.id === entry.itemId);
    if (item) {
      item.stock -= entry.quantity;
    }
  });

  receipts.push(savedReceipt);
  saveReceiptsToLocalStorage();
  selectedItems.length = 0;
  receiptForm.reset();
  receiptQtyInput.value = 1;
  showSavedReceipt = true;
  renderItems();
  renderReceipt();
}

receiptForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const customerName = customerNameInput.value.trim();
  const itemId = Number(receiptItemSelect.value);
  const qty = Number(receiptQtyInput.value);
  const item = items.find((entry) => entry.id === itemId);

  if (!item) return;

  addSelectedItem(item, qty, customerName || "");
  receiptItemSelect.value = items[0].id;
  receiptQtyInput.value = 1;
  if (!customerName) {
    customerNameInput.value = "";
  }
});

createReceiptBtn.addEventListener("click", createReceipt);
resetReceiptBtn.addEventListener("click", resetReceipt);

function resetReceipt() {
  selectedItems.length = 0;
  customerNameInput.value = "";
  receiptForm.reset();
  receiptQtyInput.value = 1;
  if (items[0]) {
    receiptItemSelect.value = items[0].id;
  }
  showSavedReceipt = false;
  renderItems();
  renderReceipt();
}

function saveReceiptsToLocalStorage() {
  localStorage.setItem("receiptHistory", JSON.stringify(receipts));
}

function loadReceiptsFromLocalStorage() {
  const savedReceipts = localStorage.getItem("receiptHistory");
  if (savedReceipts) {
    try {
      const parsedReceipts = JSON.parse(savedReceipts);
      receipts.length = 0;
      receipts.push(...parsedReceipts);
    } catch (error) {
      console.error("Error loading receipts from localStorage:", error);
    }
  }
}

loadItemsFromLocalStorage();

function viewReceiptHistory() {
  if (!receipts.length) {
    alert("No receipt history available.");
    return;
  }

  let historyText = "Receipt History:\n\n";
  receipts.forEach((receipt, index) => {
    historyText += `${index + 1}. Receipt No: ${receipt.receiptNo}\n`;
    historyText += `   Customer: ${receipt.customerName}\n`;
    historyText += `   Date: ${receipt.date}\n`;
    historyText += `   Items: ${receipt.items.length}\n`;
    historyText += `   Total: $${(receipt.total / 4100).toFixed(2)} / ${receipt.total.toLocaleString()}៛\n\n`;
  });

  alert(historyText);
}

function init() {
  loadReceiptsFromLocalStorage();
  populateSelects();
  roleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedRole = button.dataset.role || "customer";
      if (selectedRole === "customer") {
        currentRole = "customer";
        hideLoginPanel();
        setRoleAccess();
        renderItems();
        renderReceipt();
        return;
      }

      authenticateRole(selectedRole);
      renderItems();
      renderReceipt();
    });
  });

  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener("click", submitRoleLogin);
  }

  if (loginCancelBtn) {
    loginCancelBtn.addEventListener("click", () => {
      currentRole = "customer";
      hideLoginPanel();
      setRoleAccess();
      renderItems();
      renderReceipt();
    });
  }

  if (loginPasswordInput) {
    loginPasswordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        submitRoleLogin();
      }
    });
  }

  setRoleAccess();
  renderItems();
  renderReceipt();

  const viewHistoryBtn = document.getElementById("viewHistory");
  if (viewHistoryBtn) {
    viewHistoryBtn.addEventListener("click", viewReceiptHistory);
  }

  const downloadWordBtn = document.getElementById("downloadWord");
  if (downloadWordBtn) {
    downloadWordBtn.addEventListener("click", buildWordDocument);
  }

  const downloadExcelBtn = document.getElementById("downloadExcel");
  if (downloadExcelBtn) {
    downloadExcelBtn.addEventListener("click", buildExcelDocument);
  }

  const printReceiptBtn = document.getElementById("printReceipt");
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener("click", () => window.print());
  }
}

window.addEventListener("DOMContentLoaded", init);

function escapeRtf(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\n/g, "\\par ");
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function buildWordDocument() {
  const receipt = receipts[receipts.length - 1];
  if (!receipt) return;

  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const itemsBody = receipt.items
    .map((entry) => `Product: ${entry.itemName} | Product ID: ${entry.itemId} | Qty: ${entry.quantity} | Unit Price: ${entry.price.toLocaleString()}៛ | Item Total: ${entry.total.toLocaleString()}៛`)
    .join("\par ");
  const body = `${receipt.customerName}\par Date: ${date}\par Time: ${time}\par Location: ភូមិ...... សង្កាត់...... ស្រុក...... ខេត្ត......\par \par ${itemsBody}\par \par Total Price: ${receipt.total.toLocaleString()}៛\par \par Seller Signature: ____________________\par Customer Signature: ____________________`;
  const rtf = `{\\rtf1\\ansi\\deff0 {\\fonttbl\\f0 Arial;} \n\\viewkind4\\uc1 \n\\pard\\f0\\fs24 ${escapeRtf(body)}\\par\n}`;

  downloadFile("receipt.rtf", rtf, "application/rtf");
}

function buildExcelDocument() {
  const receipt = receipts[receipts.length - 1];
  if (!receipt) return;

  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const itemsRows = receipt.items
    .map((entry) => `<tr><td>Product</td><td>${entry.itemName} (ID ${entry.itemId})</td></tr><tr><td>Qty / Unit / Item Total</td><td>${entry.quantity} x ${entry.price.toLocaleString()}៛ = ${entry.total.toLocaleString()}៛</td></tr>`)
    .join("");
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8" /><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head>
      <body>
        <table>
          <tr><td colspan="2"><strong>Official Receipt</strong></td></tr>
          <tr><td>Customer Name</td><td>${receipt.customerName}</td></tr>
          <tr><td>Date</td><td>${date}</td></tr>
          <tr><td>Time</td><td>${time}</td></tr>
          <tr><td>Location</td><td>ភូមិ...... សង្កាត់...... ស្រុក...... ខេត្ត......</td></tr>
          ${itemsRows}
          <tr><td>Total Price</td><td>${receipt.total.toLocaleString()}៛</td></tr>
          <tr><td>Seller Signature</td><td></td></tr>
          <tr><td>Customer Signature</td><td></td></tr>
        </table>
      </body>
    </html>
  `;

  downloadFile("receipt.xls", html, "application/vnd.ms-excel");
}

// Preview popup removed per user request
