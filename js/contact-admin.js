document.addEventListener("DOMContentLoaded", () => {
    const inquiries = [
      {
        date: "2025-03-15",
        name: "山本 美咲",
        email: "misaki@example.com",
        message: "レッスンの持ち物はありますか？",
        status: "未対応"
      },
      {
        date: "2025-03-16",
        name: "中村 涼太",
        email: "ryota@example.com",
        message: "登録内容を変更したいです。",
        status: "対応済"
      }
    ];
  
    const tbody = document.getElementById("contactBody");
    const dateInput = document.getElementById("contactDate");
    const filterBtn = document.getElementById("contactFilterBtn");
  
    function renderInquiries(data) {
      tbody.innerHTML = "";
      data.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.date}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.message}</td>
          <td class="status-cell">${item.status}</td>
        `;
        tbody.appendChild(tr);
      });
  
      attachStatusEvents();
    }
  
    function attachStatusEvents() {
      const cells = document.querySelectorAll(".status-cell");
      cells.forEach(cell => {
        const current = cell.textContent.trim();
  
        const select = document.createElement("select");
        select.classList.add("status-select");
        const options = ["未対応", "対応済", "対応中", ];
  
        options.forEach(status => {
          const opt = document.createElement("option");
          opt.value = status;
          opt.textContent = status;
          if (status === current) opt.selected = true;
          select.appendChild(opt);
        });
  
        select.style.display = "none";
        cell.innerHTML = "";
        cell.appendChild(document.createTextNode(current));
        cell.appendChild(select);
  
        cell.addEventListener("click", () => {
          select.style.display = "inline-block";
          select.focus();
        });
  
        select.addEventListener("blur", () => {
          cell.childNodes[0].textContent = select.value;
          select.style.display = "none";
        });
      });
    }
  
    renderInquiries(inquiries);
  
    filterBtn.addEventListener("click", () => {
      const selected = dateInput.value;
      const filtered = inquiries.filter(i => i.date === selected);
      renderInquiries(filtered.length > 0 ? filtered : inquiries);
    });
  });
  