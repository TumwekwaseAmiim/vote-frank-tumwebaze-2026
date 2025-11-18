// ===== Typed.js for Hero & Why Vote Section =====
document.addEventListener("DOMContentLoaded", function () {
  const heroSlogan = new Typed('#typed-slogan', {
    strings: [
      "Leadership that Delivers 📌",
      "Experience. Dedication. Frank Tumwebaze",
      "Development Across Kibale East"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2500,
    loop: true
  });

  const whyVote = new Typed('#typed-why', {
    strings: [
      "Proven service in education, health, infrastructure, and community development.",
      "Empowering youth, farmers, and women through tangible initiatives.",
      "Lobbied government for water, electricity, and technology programs.",
      "A trusted NRM leader with deep roots in Kibale East."
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 3000,
    loop: true
  });
});

// ===== Countdown Timer to Election =====
const countdownElement = document.getElementById('countdown');
const electionDate = new Date("January 15, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = electionDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Election Day is Here! 🗳️";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left until Election`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();



// ===== Campaign Song Download =====
const downloadBtn = document.getElementById('download-song');
const campaignAudio = document.getElementById('campaign-audio');

downloadBtn.addEventListener('click', () => {
  // Get the audio source URL
  const audioSrc = campaignAudio.querySelector('source').src;
  
  // Create a temporary link element
  const a = document.createElement('a');
  a.href = audioSrc;
  a.download = 'frank_campaign_song.mp3'; // filename for download
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// ===== Chatbot Functionality =====
const chatbot = document.getElementById('chatbot');
const openChatBtn = document.getElementById('open-chatbot');
const closeChatBtn = document.getElementById('close-chatbot');

openChatBtn.addEventListener('click', () => { chatbot.style.display = 'block'; });
closeChatBtn.addEventListener('click', () => { chatbot.style.display = 'none'; });

function sendMessage() {
  const inputRaw = document.getElementById('chatbot-input').value.trim();
  const input = inputRaw.toLowerCase();
  const messages = document.getElementById('chatbot-messages');
  if (!input) return;

  // Display user message exactly as typed
  messages.innerHTML += `<div class="user-msg"><strong>You:</strong> ${inputRaw}</div>`;

  // Bot typing simulation
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("bot-msg");
  typingDiv.innerHTML = "<em>FrankBot is typing...</em>";
  messages.appendChild(typingDiv);
  messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });

  setTimeout(() => {
    let reply = "";

  // ===== Greetings =====
if (/^(hi|hello|hey|hell)/.test(input)) {
  reply = "Hello! 👋 I am FrankBot (Eng. Amiim AI), your campaign assistant. Ask me about Frank's achievements, voting info, or tech initiatives in Kibale East.";
}
// ===== Health =====
else if (input.includes("health") || input.includes("hospital") || input.includes("clinic")) {
  reply = "Frank has built health centers, supplied equipment, and upgraded existing facilities across Kibale East. You can also ask about roads, water & electricity, or technology.";
}

    // ===== Polite responses =====
    else if (input.includes("thanks") || input.includes("thank you")) {
      reply = "You're welcome! 😊 Frank and our team appreciate your support.";
    }
    else if (input.includes("you're welcome") || input.includes("your welcome")) {
      reply = "Glad to assist! Do you want to know more about Frank's achievements?";
    }
    // ===== Vote / Frank questions =====
    else if (input.includes("frank") || input.includes("vote") || input.includes("support")) {
      reply = "Hon. Frank Tumwebaze is an NRM loyal leader, trusted and connected to Kibale East. Ask for achievements in all 9 subcounties or a specific one.";
    }
    // ===== Subcounty Achievements =====
    else if (["bihanga","lyakahungu","nkoma","nkoma-katalyeba","bwizi","ntonwa","biguli","kabuye"].some(sub => input.includes(sub))) {
      reply = `In ${inputRaw.charAt(0).toUpperCase() + inputRaw.slice(1)}, Frank has improved education, health, roads, community development, and access to water & electricity. You can ask about another subcounty or sector.`;
    }
    // ===== Education =====
    else if (input.includes("education") || input.includes("school") || input.includes("classroom") || input === "s") {
      reply = "Frank has built classrooms, provided desks, solar panels, and ICT tools, integrating schools into government programs. You can ask about health, roads, or community next.";
    }
    // ===== Health =====
    else if (input.includes("health") || input.includes("hospital") || input.includes("clinic")) {
      reply = "Frank has built health centers, supplied equipment, and upgraded existing facilities across Kibale East. You can also ask about roads, water & electricity, or technology.";
    }
    // ===== Roads / Infrastructure =====
    else if (input.includes("road") || input.includes("infrastructure") || input.includes("bridge")) {
      reply = "Frank opened and improved access roads and bridges, handing major routes to central government. You can ask about education, health, or community development next.";
    }
    // ===== Community / Youth =====
    else if (input.includes("youth") || input.includes("community") || input.includes("farmers")) {
      reply = "Frank empowered youth, farmers, and boda-boda unions with tools, livestock, and machinery. You can ask about education, roads, or health.";
    }
    // ===== Water & Electricity =====
    else if (input.includes("water") || input.includes("electricity") || input.includes("power")) {
      reply = "Frank lobbied government to extend clean water and electricity to remote villages. You can also ask about health, roads, or community.";
    }
    // ===== Technology / Innovation =====
    else if (input.includes("technology") || input.includes("innovation") || input.includes("tech")) {
      reply = "Kibale East embraces technology thanks to youth and community initiatives. Eng. Amiim leads tech projects for education and agriculture. You can ask about other sectors too.";
    }
    // ===== Music / Campaign Song =====
    else if (input.includes("music") || input.includes("song") || input.includes("audio") || input.includes("campaign song")) {
      reply = "Check out the campaign song by Eng. Amiim in the music section 🎵. You can play or download it.";
    }
    // ===== Election / Voting Info =====
    else if (input.includes("january") || input.includes("15") || input.includes("election") || input.includes("vote info") || input.includes("voting")) {
      reply = "Elections are on January 15, 2026. Voting for Hon. Frank ensures proven leadership and continued development in Kibale East. #FrankMyMP #FrankMyChoice";
    }
    // ===== Yes / No Responses =====
    else if (input.includes("yes") || input.includes("ok") || input.includes("sure") || input.includes("y")) {
      reply = "Great! 😊 You can ask about education, health, roads, community, water & electricity, technology, or music.";
    }
    else if (input.includes("no") || input.includes("nah") || input.includes("n")) {
      reply = "No worries! You can still ask about Frank’s achievements or voting info anytime.";
    }
    // ===== Fallback =====
    else {
      reply = "Hmm 🤔 I’m not sure about that. Try asking about education, health, roads, community, water/electricity, technology, music, or voting info.";
    }

    // Replace typing with actual reply
    typingDiv.innerHTML = `<strong>FrankBot:</strong> ${reply}`;
    messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });

  }, 800); // Typing delay
}

// Send message on Enter
document.getElementById('chatbot-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendMessage();
});

// ===== Share Campaign Button Toggle =====
const shareBtn = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");
const shareStatus = document.getElementById("share-status");

shareBtn.addEventListener("click", () => {
  if (shareOptions.style.display === "none") {
    shareOptions.style.display = "flex";
    shareStatus.innerText = "";
  } else {
    shareOptions.style.display = "none";
  }
});

// Share links open platform
document.querySelectorAll(".share-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default immediate navigation
    const url = link.href;
    window.open(url, '_blank');
    shareStatus.innerText = "Opened sharing link! ✅";
  });
});
