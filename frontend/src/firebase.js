import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIysFmjlup7CXdFFVBtOAX6ZQl1W8f1Rk",
  authDomain: "softwareengr-project.firebaseapp.com",
  projectId: "softwareengr-project",
  storageBucket: "softwareengr-project.appspot.com",
  messagingSenderId: "1018522073859",
  appId: "1:1018522073859:web:6501318cdb7c0f18ea4736",
  measurementId: "G-BE10YTSED5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
