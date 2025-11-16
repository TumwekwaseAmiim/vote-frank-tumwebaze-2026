// Typed.js Hero Slogan
var typed = new Typed('#typed-slogan', {
  strings: [
    "Vote Hon. Frank – Proven Leadership!",
    "NRM Loyal. Museveni Supports Him!",
    "Experience, Vision, and Community Focus!"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Typed.js Why Vote Section
var typedWhy = new Typed('#typed-why', {
  strings: [
    "Proven experience and deep connection to Kibale East.",
    "Personally funds interventions and delivers results.",
    "Lobbies government projects to reach every corner of the constituency.",
    "Trusted, honest, and committed to community development."
  ],
  typeSpeed: 40,
  backSpeed: 25,
  loop: true
});

// ScrollReveal for gallery and achievements
ScrollReveal().reveal('.gallery-images img', { duration: 1500, distance: '50px', origin: 'bottom', interval: 200 });
ScrollReveal().reveal('#achievements p', { duration: 1500, distance: '50px', origin: 'bottom', interval: 300 });

// Countdown to Election
const electionDate = new Date("January 15, 2026 07:00:00").getTime();
const countdownEl = document.getElementById('countdown');
setInterval(() => {
  const now = new Date().getTime();
  const diff = electionDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.innerHTML = days > 0 ? `Days until election: ${days}` : "Election Day is here!";
}, 1000);

// Enhanced Interactive Chatbot
function sendMessage() {
  const inputRaw = document.getElementById('chatbot-input').value.trim();
  const input = inputRaw.toLowerCase();
  const messages = document.getElementById('chatbot-messages');
  if (!input) return;

  // Display user's message
  messages.innerHTML += `<div><strong>You:</strong> ${inputRaw}</div>`;

  let reply = "";

  // Greetings
  if (/^(hi|hello|hey|h|he|hell)/.test(input)) {
    reply = "Hello! 👋 I am FrankBot, your campaign assistant. Do you want to know about Frank's achievements, voting info, or technology innovation in Kibale East?";
  } 
  // Vote or Frank questions
  else if (input.includes("frank") || input.includes("vote") || input.includes("support")) {
    reply = "Hon. Frank Tumwebaze is NRM loyal, trusted, and deeply connected to Kibale East. Would you like a summary of his achievements in all 9 subcounties or details about a specific area?";
  } 
  // Subcounty / achievements request
  else if (input.includes("bihanga") || input.includes("lyakahungu") || input.includes("nkoma") || input.includes("nkoma-katalyeba") || input.includes("bwizi") || input.includes("ntonwa") || input.includes("biguli") || input.includes("kabuye")) {
    reply = `In ${inputRaw.charAt(0).toUpperCase() + inputRaw.slice(1)}, Frank has improved education, health, roads, community development, and access to water & electricity. Would you like me to show other subcounties too?`;
  } 
  // Education / schools
  else if (input.includes("education") || input.includes("school") || input.includes("classroom") || input === "s") {
    reply = "Frank has built classrooms, provided desks, solar panels, ICT tools, and integrated schools into government programs. Would you like info on health or infrastructure next?";
  } 
  // Health
  else if (input.includes("health") || input.includes("hospital") || input.includes("clinic")) {
    reply = "Frank has built health centers, supplied equipment, and upgraded existing facilities. Would you like info on roads or community development next?";
  } 
  // Roads / infrastructure
  else if (input.includes("road") || input.includes("infrastructure") || input.includes("bridge")) {
    reply = "Frank opened and improved access roads, and handed over major routes to the central government. Want to know about education or health next?";
  } 
  // Community development / youth
  else if (input.includes("youth") || input.includes("community") || input.includes("farmers")) {
    reply = "Frank empowered youth, farmers, and boda-boda unions with tools, livestock, and machinery. Do you want details on education or infrastructure?";
  } 
  // Water & electricity
  else if (input.includes("water") || input.includes("electricity") || input.includes("power")) {
    reply = "Frank lobbied government to extend clean water systems and electricity to remote villages. Would you like info on other sectors?";
  } 
  // Technology / innovation
  else if (input.includes("technology") || input.includes("innovation") || input.includes("tech")) {
    reply = "Kibale East is embracing technology thanks to youth and community initiatives. Eng. Amiim Tumwekwase leads tech projects for education and agriculture. Want to know more about local tech programs?";
  } 
  // Election / voting info
  else if (input.includes("january") || input.includes("15") || input.includes("election")) {
    reply = "Elections are on January 15, 2026. Voting for Hon. Frank ensures proven leadership and continued development in Kibale East. Share this site with friends to support the movement! #FrankMyMP #FrankMyChoice";
  } 
  // Yes / confirmation
  else if (input.includes("yes") || input.includes("sure") || input.includes("ok") || input.includes("y")) {
    reply = "Great! 😊 You can ask about education, health, roads, community development, water & electricity, or technology. Type the topic name or subcounty.";
  } 
  // No / decline
  else if (input.includes("no") || input.includes("nah") || input.includes("n")) {
    reply = "No worries! You can still ask me about Frank’s achievements, voting info, or tech in Kibale East anytime.";
  } 
  // Fallback for unknown questions
  else {
    reply = "Hmm 🤔 I’m not sure about that. You can ask about education, health, roads, community development, water & electricity, technology, or voting info. Which one would you like?";
  }

  // Display chatbot reply
  messages.innerHTML += `<div><strong>FrankBot:</strong> ${reply}</div>`;

  // Clear input and scroll
  document.getElementById('chatbot-input').value = '';
  messages.scrollTop = messages.scrollHeight;
}
