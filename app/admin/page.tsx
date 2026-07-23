
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "s@ZAD_kt" && password === "zad") {
      alert("تم تسجيل الدخول بنجاح");
      window.location.href = "/";
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#222",
          padding: "20px",
          borderRadius: "10px",
          width: "320px",
        }}
      >
        <h2 style={{ color: "#d4af37", textAlign: "center" }}>
          لوحة إدارة ZAD Kitchen
        </h2>

        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#d4af37",
            border: "none",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}
