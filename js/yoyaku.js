document.addEventListener("DOMContentLoaded", () => {
    const daysToShow = 7;
    const times = [
      "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
    ];
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    const headerRow = document.getElementById("calendar-header");
    const body = document.getElementById("calendar-body");
  
    const today = new Date();
  
    const dates = [];
  
    // ヘッダーに日付を追加
    for (let i = 0; i < daysToShow; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
  
      const yyyy = date.getFullYear();
      const mm = date.getMonth() + 1;
      const dd = date.getDate();
      const day = date.getDay();
  
      const label = `${mm}/${dd}(${weekdays[day]})`;
      dates.push({ date, day });
  
      const th = document.createElement("th");
      th.textContent = label;
      headerRow.appendChild(th);
    }
  
    // 各時間帯ごとの行を生成
    times.forEach(time => {
      const tr = document.createElement("tr");
      const timeCell = document.createElement("td");
      timeCell.textContent = time;
      tr.appendChild(timeCell);
  
      dates.forEach(({ day }) => {
        const td = document.createElement("td");
  
        // 休業日（月:1、水:3、金:5）
        if ([1, 3, 5].includes(day)) {
          td.textContent = "休";
          td.classList.add("closed");
        } else {
          // 仮にランダムで〇×を表示（今後DBから取得可能）
          const available = Math.random() > 0.3;
          td.textContent = available ? "〇" : "×";
          td.classList.add(available ? "available" : "full");
        }
  
        tr.appendChild(td);
      });
  
      body.appendChild(tr);
    });
  });
  