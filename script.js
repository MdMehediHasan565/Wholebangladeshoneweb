// ১. লাইভ ঘড়ি
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('bn-BD');
    const dateString = now.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('live-clock').innerText = `${dateString} | ${timeString}`;
}
setInterval(updateClock, 1000);

// ২. সার্চ অপশন (Service Filter)
document.getElementById('serviceSearch').addEventListener('input', function(e) {
    let query = e.target.value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// ৩. ডামি ওয়েদার আপডেট
function getLiveWeather() {
    // এখানে আসল API ব্যবহার করা যায়, আপাতত স্ট্যাটিক
    const weatherEl = document.getElementById('weather');
    weatherEl.innerHTML = `<i class="fas fa-cloud-sun"></i> ঢাকা: ৩১°C (আকাশ পরিষ্কার)`;
}
getLiveWeather();