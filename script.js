/* ===== PAGE NAVIGATION ===== */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');

  // Disable chat input if not chats page
  const chatInput = document.querySelector('.chat-box input');
  if(page === 'chats') {
    chatInput.disabled = false;
    chatInput.value = '';
    document.getElementById('chatName').innerText = 'Select a chat';
    document.getElementById('messages').innerHTML = '';
  } else {
    chatInput.disabled = true;
  }
}

/* ===== FEED POSTS ===== */
let feed = document.getElementById("feed");

function createPost() {
  let text = document.getElementById("postText").value;
  if(!text) return;

  let post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <div class="post-header">
      <img src="https://i.pravatar.cc/35" />
      <strong>@you</strong>
    </div>
    <p>${text}</p>
    <div class="actions">
      <span onclick="likePost(this)">❤️ 0</span>
      <span onclick="commentPost()">💬 Comment</span>
      <span>➕ Follow</span>
    </div>
  `;

  feed.prepend(post);
  document.getElementById("postText").value = "";
}

function likePost(el) {
  let count = parseInt(el.innerText.split(" ")[1]);
  el.innerText = `❤️ ${count + 1}`;
}

function commentPost() {
  alert("Comment feature coming soon!");
}

/* ===== REELS ===== */
// Example reels already static in HTML
// Optional: add JS-based auto scroll or dynamic reels

/* ===== CHATS ===== */
const messagesDiv = document.getElementById("messages");
const chatInput = document.querySelector(".chat-box input");
let activeChat = "";

function openChat(name) {
  activeChat = name;
  document.getElementById("chatName").innerText = name;
  messagesDiv.innerHTML = `
    <p><strong>${name}:</strong> Hi there! 👋</p>
    <p><strong>You:</strong> Hello!</p>
  `;
  chatInput.disabled = false;
}

chatInput.addEventListener("keypress", function(e){
  if(e.key === "Enter" && activeChat) {
    let msg = chatInput.value.trim();
    if(msg === "") return;
    let p = document.createElement("p");
    p.innerHTML = `<strong>You:</strong> ${msg}`;
    messagesDiv.appendChild(p);
    chatInput.value = "";

    // Simulate reply
    setTimeout(()=> {
      let reply = document.createElement("p");
      reply.innerHTML = `<strong>${activeChat}:</strong> Got it! ✅`;
      messagesDiv.appendChild(reply);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 800);
  }
});

/* ===== PROFILE ===== */
// Edit Profile button – example placeholder
const profileBtn = document.querySelector(".profile button");
profileBtn.addEventListener("click", ()=>{
  alert("Edit Profile feature coming soon!");
});
