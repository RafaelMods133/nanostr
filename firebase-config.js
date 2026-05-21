// ── NanoJS Firebase Config ──
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBC4alNaDmUAvjQjp6aJhdrYjd0Ho3eR9U",
  authDomain: "nanojs-5ec84.firebaseapp.com",
  databaseURL: "https://nanojs-5ec84-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nanojs-5ec84",
  storageBucket: "nanojs-5ec84.firebasestorage.app",
  messagingSenderId: "172720280086",
  appId: "1:172720280086:web:17975973fc6d3cf3ba5b37"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const WA_NUMBER = "6283160363382"; // ← Ganti nomor WhatsApp kamu

export function fmt(n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
}
