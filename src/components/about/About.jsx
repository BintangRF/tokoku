import React, { useState } from "react";

const About = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waLink = `http://wa.me/18002428478?text=${encodeURIComponent(
      question
    )}`;
    window.open(waLink, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold text-[#10375C]">
            Tentang Toko Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Kami adalah platform e-commerce yang menyediakan berbagai produk
            terbaik dengan kualitas terjamin. Belanja menjadi lebih mudah dan
            aman di toko kami. Dengan dukungan layanan pelanggan yang siap
            membantu, Anda bisa mendapatkan pengalaman berbelanja yang
            menyenangkan kapan saja, di mana saja.
          </p>
        </div>

        <div className="bg-[#10375C] text-white p-6 rounded-lg shadow-md">
          <h3 className="mb-4 text-2xl font-semibold">Butuh Bantuan?</h3>
          <p className="mb-6 text-lg">
            Jika Anda memiliki pertanyaan atau butuh bantuan lebih lanjut,
            silakan kirimkan pertanyaan Anda kepada kami melalui formulir di
            bawah ini, dan customer service kami akan segera membantu Anda!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <textarea
              className="w-full p-4 text-lg text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EB8317]"
              rows="4"
              placeholder="Masukkan pertanyaan Anda..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 text-white bg-[#EB8317] hover:bg-[#10375C] rounded-lg shadow-lg transition duration-300"
            >
              Kirim Pertanyaan
            </button>
          </form>
          {submitted && (
            <div className="mt-4 text-center text-green-500">
              Terima kasih! Pertanyaan Anda telah dikirim. Kami akan segera
              menghubungi Anda melalui WhatsApp.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
