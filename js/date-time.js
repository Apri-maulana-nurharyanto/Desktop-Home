function updateClock() {
  const now = new Date();

  // Format Jam (12 jam, jam & menit saja + AM/PM)
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedHours = String(hours).padStart(2, '0');

  const timeString = `${formattedHours}:${minutes} ${ampm}`;

  // Format Tanggal (Nama hari, tanggal bulan[singkat] tahun)
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

  const dayName = days[now.getDay()];
  const dateNum = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  const dateString = `${dayName}, ${dateNum} ${monthName} ${year}`;

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();