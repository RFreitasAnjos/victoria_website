import { FaHeart, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-12 bg-blue-900 text-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Contato */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contato</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> (81) 98467-1475
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> maryjnvasc@gmail.com
          </p>
        </div>

        {/* Horário */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Horário de Atendimento</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaClock /> Seg - Sex: 08h às 18h
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaClock /> Sáb: 09h às 13h
          </p>
        </div>

        {/* Localização */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Endereço</h4>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt /> Recife - PE, Brasil
          </p>
        </div>

        {/* Informações adicionais */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Informações</h4>
          <p>Atendimento online e presencial.</p>
          <p>Respostas em até 24h úteis.</p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-amber-200/30 py-4 text-center text-sm">
        Desenvolvido com{" "}
        <FaHeart className="inline text-red-500" /> por{" "}
        <a
          href="https://rfreitasanjos.github.io/meu-portifolio/"
          className="font-bold animate-pulse text-white hover:text-blue-400 transition-colors"
        >
          Renan Freitas
        </a>{" "}
        — &copy; {new Date().getFullYear()} Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
