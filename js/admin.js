document.addEventListener("DOMContentLoaded", () => {
    const reservations = [
      {
        date: "2025-03-15",
        time: "14:00",
        name: "田中 太郎",
        email: "tanaka@example.com",
        phone: "090-1234-5678",
        count: 1,
        status: "確認済"
      },
      {
        date: "2025-03-15",
        time: "16:00",
        name: "佐藤 花子",
        email: "hanako@example.com",
        phone: "080-9876-5432",
        count: 2,
        status: "未確認"
      },
      {
        date: "2025-03-16",
        time: "15:00",
        name: "山田 一郎",
        email: "yamada@example.com",
        phone: "070-5555-4444",
        count: 3,
        status: "確認済"
      }
    ];
  
    const tbody = document.getElementById("reservationBody");
    const filterInput = document.getElementById("filterDate");
    const filterBtn = document.getElementById("filterBtn");
  
    function renderTable(data) {
      tbody.innerHTML = "";
      data.forEach((res, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${res.date}</td>
          <td>${res.time}</td>
          <td>${res.name}</td>
          <td>${res.email}</td>
          <td>${res.phone}</td>
          <td>${res.count}回目</td>
          <td class="status-cell">${res.status}</td>
          <td><button class="delete-btn" data-index="${index}">削除</button></td>
        `;
        tbody.appendChild(tr);
      });
  
      attachStatusEvent();
      attachDeleteEvent();
    }
  
    function attachStatusEvent() {
      const statusCells = document.querySelectorAll('.status-cell');
  
      statusCells.forEach(cell => {
        const currentStatus = cell.textContent.trim();
  
        const select = document.createElement('select');
        select.classList.add('status-select');
  
        const options = ['未確認', '確認済', 'キャンセル', '来店済み', '無断キャンセル'];
        options.forEach(status => {
          const option = document.createElement('option');
          option.value = status;
          option.textContent = status;
          if (status === currentStatus) {
            option.selected = true;
          }
          select.appendChild(option);
        });
  
        select.style.display = "none";
        cell.innerHTML = ''; // セル初期化
        cell.appendChild(document.createTextNode(currentStatus));
        cell.appendChild(select);
  
        cell.addEventListener('click', () => {
          select.style.display = 'inline-block';
          select.focus();
        });
  
        select.addEventListener('blur', () => {
          const newStatus = select.value;
          cell.childNodes[0].textContent = newStatus;
          select.style.display = 'none';
          // ここで fetch などでサーバー更新も可能
        });
      });
    }
  
    function attachDeleteEvent() {
      const deleteButtons = document.querySelectorAll(".delete-btn");
  
      deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const index = parseInt(btn.getAttribute("data-index"));
          if (confirm("この予約を削除してもよろしいですか？")) {
            reservations.splice(index, 1);
            renderTable(reservations);
          }
        });
      });
    }
  
    renderTable(reservations);
  
    filterBtn.addEventListener("click", () => {
      const selected = filterInput.value;
      const filtered = reservations.filter(r => r.date === selected);
      renderTable(filtered.length > 0 ? filtered : reservations);
    });
  });
  