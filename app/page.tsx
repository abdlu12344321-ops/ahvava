export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "#D4AF37", fontSize: "40px" }}>
        ZAD Kitchen
      </h1>

      <h2>مطبخ زاد</h2>

      <p>أهلاً بكم في مطبخ زاد</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#D4AF37",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        اطلب الآن
      </button>
    </main>
  );
}
