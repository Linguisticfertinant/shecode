import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// ✅ Connect to the same DB as in your Firebase config
const db = window.db;

// 📝 Save a story (used by your form)
window.submitStory = async function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const story = document.getElementById("story").value;

  try {
    await addDoc(collection(db, "stories"), {
      title,
      story,
      timestamp: new Date(),
    });

    alert("Story submitted successfully!");
    document.getElementById("storyForm").reset();
    loadStories(); // Refresh list
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

// 📖 Load all stories and display them
window.loadStories = async function () {
  console.log("📡 Fetching stories...");

  const storyList = document.getElementById("storyList");
  storyList.innerHTML = "";

  const q = query(collection(db, "stories"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log("📄 Story found:", data);

    const card = document.createElement("div");
    const card = document.createElement("div");
card.className = "story-card";


    card.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.story}</p>
      <small><i>${data.timestamp?.toDate().toLocaleString() || 'No timestamp'}</i></small>
    `;

    storyList.appendChild(card);
  });
};
