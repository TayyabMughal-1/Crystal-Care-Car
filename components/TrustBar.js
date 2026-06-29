export default function TrustBar() {
  const items = [
    { number: "24/7", label: "Booking Requests" },
    { number: "2 Cities", label: "Islamabad & Rawalpindi" },
    { number: "20+", label: "Car Care Services" },
    { number: "Mobile", label: "Doorstep Service" },
  ];

  return (
    <section className="trust-section">
      <div className="container trust-grid">
        {items.map((item) => (
          <div className="trust-item" key={item.label}>
            <strong>{item.number}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
