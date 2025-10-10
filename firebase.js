// --- Cấu hình Firebase ---
const firebaseConfig = {
  apiKey: "dán_api_key_vào_đây",
  authDomain: "dán_authDomain_vào_đây",
  projectId: "dán_projectId_vào_đây",
  storageBucket: "dán_storageBucket_vào_đây",
  messagingSenderId: "dán_senderId_vào_đây",
  appId: "dán_appId_vào_đây"
};

// --- Khởi tạo Firebase ---
firebase.initializeApp(firebaseConfig);

// --- Tham chiếu tới Storage ---
const storage = firebase.storage();
