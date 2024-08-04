
const Contact = () => (
  <section id="contact" className="container py-5">
    <h2 className="text-center mb-4 fade-in-up">Contact 📞</h2>
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <p className="fade-in-up-delay">
          <strong>Email:</strong> your.email@example.com 📧
        </p>
        <p className="fade-in-up-delay">
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your LinkedIn 🌐
          </a>
        </p>
        <p className="fade-in-up-delay-long">
          <strong>Phone:</strong> +1 (234) 567-8900 📱
        </p>
        <p className="fade-in-up-delay-long">
          <strong>Address:</strong> 123 Main St, Anytown, USA 🏠
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
