// Front-end demo chatbot. Connect a secure backend/API before enabling real AI responses.
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".chat-launcher")) return;
  const launcher = document.createElement("button");
  launcher.className = "chat-launcher";
  launcher.type = "button";
  launcher.setAttribute("aria-label", "Open TVA helper chat");
  launcher.textContent = "✦";
  const panel = document.createElement("section");
  panel.className = "chat-panel";
  panel.setAttribute("aria-label", "TVA helper chat");
  panel.innerHTML = '<div class="chat-head"><strong>TVA HELPER</strong><button type="button" aria-label="Close chat">×</button></div><div class="chat-messages" aria-live="polite"><div class="chat-msg">Welcome to the TVA fan site. Ask me about the roster, leadership, or the pages here.</div></div><form class="chat-form"><input name="message" maxlength="240" placeholder="Ask about TVA..." aria-label="Message" autocomplete="off" required><button type="submit">SEND</button></form><p class="chat-disclaimer">Demo helper · Real AI needs a backend connection.</p>';
  document.body.append(launcher, panel);
  const close = panel.querySelector(".chat-head button");
  const form = panel.querySelector("form");
  const input = panel.querySelector("input");
  const messages = panel.querySelector(".chat-messages");
  launcher.addEventListener("click", () => { panel.classList.toggle("open"); if (panel.classList.contains("open")) input.focus(); });
  close.addEventListener("click", () => panel.classList.remove("open"));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addMessage(question, "user");
    input.value = "";
    const q = question.toLowerCase();
    let answer = "I'm the demo TVA helper. For now, use the Players page to search names. A secure backend can connect this chat to a real AI assistant later.";
    if (q.includes("joker") || q.includes("founder")) answer = "TVA Joker is the Founder / Creator of TVA and is shown separately from the current leadership.";
    else if (q.includes("leader") || q.includes("vasu")) answer = "TVA Parunth Vasu is the Leader. TVA Chandra Boss and TVA Ap Pappan are Co-Leaders.";
    else if (q.includes("player") || q.includes("member") || q.includes("roster") || q.includes("search")) answer = "Open the Players page to search the TVA roster and filter by Founder, Leader, Co-Leader, or Member.";
    else if (q.includes("story")) answer = "Open TVA Story to read the crew introduction and leadership details.";
    else if (q.includes("gallery") || q.includes("photo")) answer = "The Gallery page is marked coming soon. Add your screenshots to the assets folder when you're ready.";
    else if (q.includes("full form")) answer = "The official TVA full form has not been provided yet, so this site doesn't guess it.";
    window.setTimeout(() => addMessage(answer, "bot"), 220);
  });
  function addMessage(text, kind) {
    const node = document.createElement("div");
    node.className = "chat-msg" + (kind === "user" ? " user" : "");
    node.textContent = text;
    messages.appendChild(node);
    messages.scrollTop = messages.scrollHeight;
  }
});