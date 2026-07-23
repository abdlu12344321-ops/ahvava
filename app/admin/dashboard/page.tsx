
export default function Dashboard() {
  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#d4af37" }}>
        لوحة تحكم ZAD Kitchen
      </h1>

      <hr />

      <h2>الطلبات</h2>
      <p>لا توجد طلبات حالياً.</p>

      <hr />

      <h2>المنتجات</h2>

      <button
        style={{
          padding: "10px 20px",
          background: "#d4af37",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        إضافة منتج
      </button>
    </div>
  );
}
