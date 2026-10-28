/**
 * Chatbot FAQ - Doce & Sabor Confeitaria Artesanal
 * Uso: <script src="chatbot.js"></script> antes do </body>
 */
(function () {
  if (window.chatbotInicializado) return;
  window.chatbotInicializado = true;

  // ============ CONFIGURAÇÃO ============
  const CONFIG = {
    titulo: "Doce & Sabor",
    subtitulo: "Assistente virtual",
    whatsappNumero: "5519983850132",
    whatsappExibicao: "(19) 98385-0132",
    instagram: "@doceysaborconfeitaria", // confira se o perfil está escrito assim mesmo
    boasVindas: "Olá! 👋 Sou o assistente da <strong>Doce & Sabor</strong>. Como posso ajudar você hoje?"
  };

  const wa = (texto) =>
    "https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(texto);

  const link = (url, rotulo) =>
    '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="faq-link">' + rotulo + "</a>";

  // ============ BASE DE CONHECIMENTO ============
  const FAQ = [
    {
      titulo: "🎂 Como fazer uma encomenda",
      chip: true,
      keywords: ["encomenda", "encomendar", "pedido", "pedir", "orcamento", "comprar", "como funciona", "processo"],
      resposta:
        "É simples:<br>" +
        "<strong>1.</strong> Escolha a linha de produtos ou envie a referência do seu tema.<br>" +
        "<strong>2.</strong> Peça o orçamento pelo formulário ou WhatsApp informando quantidade e data.<br>" +
        "<strong>3.</strong> Produzimos tudo com ingredientes selecionados e muito carinho.<br>" +
        "<strong>4.</strong> Receba no local do evento ou retire diretamente em nosso ateliê.<br><br>" +
        link(wa("Olá! Gostaria de solicitar um orçamento."), "💬 Pedir orçamento no WhatsApp")
    },
    {
      titulo: "🍰 Nossas especialidades",
      chip: true,
      keywords: ["especialidade", "especialidades", "produtos", "cardapio", "linhas", "doces", "vendem", "trabalham", "opcoes"],
      resposta:
        "Temos três linhas principais:<br>" +
        "👰 <strong>Doces Finos & Casamentos</strong>: eventos de alto padrão, com acabamento refinado e detalhes folheados.<br>" +
        "🎁 <strong>Doces Personalizados</strong>: bolos e doces esculpidos e modelados à mão.<br>" +
        "🍫 <strong>Sobremesas & Pronta Entrega</strong>: brownies, copinhos artesanais e tortas finas."
    },
    {
      titulo: "👰 Casamentos e doces finos",
      keywords: ["casamento", "casamentos", "noiva", "fino", "finos", "15 anos", "debutante", "corporativo", "evento", "cerimonial"],
      resposta:
        "Nossa linha de <strong>Doces Finos & Casamentos</strong> atende recepções, festas de 15 anos e eventos corporativos de alto padrão, com acabamento sofisticado e toque artesanal. " +
        "Garanta a reserva da sua data com antecedência! " +
        link(wa("Gostaria de saber mais sobre Doces Finos para casamento."), "Solicitar orçamento ✨")
    },
    {
      titulo: "🎁 Doces personalizados",
      keywords: ["personalizado", "personalizados", "tematico", "tematicos", "tema", "infantil", "aniversario", "festa", "modelado", "pirulito", "bolo"],
      resposta:
        "Os <strong>Doces Personalizados</strong> são bolos e doces esculpidos e modelados sob medida para festas infantis e celebrações temáticas. " +
        "Conte o tema da sua festa para montarmos o projeto! " +
        link(wa("Gostaria de saber mais sobre Doces Personalizados."), "Solicitar orçamento ✨")
    },
    {
      titulo: "🍫 Sobremesas e pronta entrega",
      keywords: ["sobremesa", "sobremesas", "pronta entrega", "brownie", "brownies", "copinho", "copinhos", "ganache", "torta", "tortas", "cacau", "individual"],
      resposta:
        "Na linha de <strong>Sobremesas & Pronta Entrega</strong> oferecemos brownies, copinhos artesanais de ganache e tortas finas em embalagens delicadas para o seu dia a dia. " +
        link(wa("Gostaria de saber mais sobre as Sobremesas disponíveis."), "Consultar disponibilidade ✨")
    },
    {
      titulo: "🕒 Horário de atendimento",
      chip: true,
      keywords: ["horario", "horarios", "hora", "horas", "funciona", "funcionamento", "aberto", "abre", "fecha", "domingo", "sabado"],
      resposta:
        "Atendemos de <strong>terça a sábado, das 09h às 18h</strong>, e aos <strong>domingos, das 09h às 12h</strong>."
    },
    {
      titulo: "🚚 Entrega e região atendida",
      chip: true,
      keywords: ["entrega", "entregam", "entregar", "frete", "regiao", "atendem", "cidade", "cidades", "valinhos", "vinhedo", "paulinia", "campinas", "retirada", "retirar"],
      resposta:
        "Atendemos sob encomenda em <strong>Campinas, Valinhos, Vinhedo, Paulínia</strong> e toda a Região Metropolitana. " +
        "As entregas são refrigeradas e agendadas com precisão para o seu evento. Você também pode optar por <strong>retirar no ateliê</strong>."
    },
    {
      titulo: "📍 Endereço e degustação",
      keywords: ["endereco", "onde", "fica", "localizacao", "atelie", "degustacao", "degustar", "visitar", "provar", "mapa"],
      resposta:
        "Nosso ateliê fica em <strong>Campinas - SP</strong>. A degustação para eventos e o atendimento presencial ocorrem <strong>exclusivamente mediante agendamento prévio</strong>. " +
        link(wa("Olá! Gostaria de agendar uma degustação e receber o endereço do ateliê."), "💬 Agendar degustação no WhatsApp")
    },
    {
      titulo: "💳 Preços e pagamento",
      chip: true,
      keywords: ["preco", "precos", "valor", "valores", "quanto custa", "quanto", "custa", "pagamento", "pagar", "pix", "cartao", "boleto", "parcelar", "sinal"],
      resposta:
        "Como cada pedido é único, os valores variam conforme a quantidade, a personalização e a data. Aceitamos <strong>Pix, cartões de crédito e débito</strong>, com parcelamento a combinar. " +
        link(wa("Olá! Gostaria de solicitar um orçamento personalizado."), "💬 Pedir orçamento")
    },
    {
      titulo: "⏳ Antecedência para encomendar",
      chip: true,
      keywords: ["antecedencia", "prazo", "prazos", "urgente", "disponibilidade", "data", "reservar", "reserva"],
      resposta:
        "Recomendamos fazer a reserva com o <strong>máximo de antecedência possível</strong> (idealmente de 15 a 30 dias para grandes eventos). " +
        "Para verificar se ainda temos vagas na agenda da semana, " +
        link(wa("Olá! Gostaria de verificar a disponibilidade para a minha data."), "consulte pelo WhatsApp")
    },
    {
      titulo: "🧁 Quantos doces pedir por convidado",
      chip: true,
      keywords: ["quantos doces", "quantos", "convidado", "convidados", "pessoas", "calcular", "cento", "quantidade por pessoa"],
      resposta:
        "A média recomendada é de <strong>5 a 7 doces finos por convidado</strong> quando houver bolo, ou de <strong>8 a 10 doces</strong> se for a sobremesa principal. " +
        "Informe a quantidade de convidados e o estilo da sua festa para ajudarmos a calcular com exatidão: " +
        link(wa("Olá! Preciso de ajuda para calcular a quantidade de doces para o meu evento."), "💬 Calcular com a gente")
    },
    {
      titulo: "📦 Pedido mínimo",
      keywords: ["minimo", "minima", "minimos", "pedido minimo", "quantidade minima", "menor quantidade"],
      resposta:
        "Para doces tradicionais e finos, o pedido mínimo é de <strong>25 unidades por sabor</strong>. Para itens personalizados, varia conforme o modelo. " +
        link(wa("Olá! Gostaria de saber mais sobre as quantidades mínimas por produto."), "💬 Consultar pelo WhatsApp")
    },
    {
      titulo: "😋 Sabores e recheios",
      keywords: ["sabor", "sabores", "recheio", "recheios", "brigadeiro", "massa", "massas", "cobertura"],
      resposta:
        "Trabalhamos com opções clássicas e gourmet, como <strong>Chocolate Belga, Pistache, Ninho com Nutella, Doce de Leite com Nozes e Frutas Vermelhas</strong>. " +
        link(wa("Olá! Gostaria de receber o catálogo completo de sabores e recheios."), "💬 Ver catálogo no WhatsApp")
    },
    {
      titulo: "🌱 Restrições alimentares",
      keywords: ["gluten", "lactose", "vegano", "vegana", "alergia", "alergico", "alergica", "restricao", "restricoes", "diet", "zero acucar", "sem acucar"],
      resposta:
        "Temos opções com <strong>zero adição de açúcares e receitas sem lactose</strong>. Para outras restrições (glúten, vegano, alergias), consulte a disponibilidade antes de fechar o pedido, para indicarmos o preparo mais seguro para você: " +
        link(wa("Olá! Gostaria de consultar o menu para restrições alimentares."), "💬 Perguntar pelo WhatsApp")
    },
    {
      titulo: "🍬 Mesa de doces e bandejas",
      keywords: ["mesa", "mesa de doces", "bandeja", "bandejas", "suporte", "suportes", "emprestam", "emprestimo", "locacao", "decoracao"],
      resposta:
        "Oferecemos o serviço completo de montagem de mesas de doces e também realizamos a <strong>locação de suportes e bandejas sofisticadas</strong> para harmonizar com a decoração da sua festa. " +
        link(wa("Olá! Gostaria de saber mais sobre a montagem de mesa de doces e locação de bandejas."), "💬 Falar sobre montagem de mesa")
    },
    {
      titulo: "🧊 Conservação e validade",
      keywords: ["quantos dias duram", "quanto tempo dura", "conservar", "conservacao", "conservado", "duram", "dura", "validade", "durabilidade", "congelar", "freezer", "geladeira", "armazenar", "guardar"],
      resposta:
        "Os doces artesanais têm validade de <strong>3 a 5 dias quando mantidos sob refrigeração</strong>. Orientamos consumir em temperatura ambiente para aproveitar a textura e o sabor ideais. " +
        link(wa("Olá! Gostaria de orientações de conservação para o meu pedido."), "💬 Tirar dúvidas no WhatsApp")
    },
    {
      titulo: "✏️ Alterar ou cancelar pedido",
      keywords: ["alterar", "alteracao", "mudar", "trocar", "cancelar", "cancelamento", "remarcar", "modificar"],
      resposta:
        "Alterações no pedido ou na data podem ser feitas com até <strong>7 dias de antecedência</strong> da data programada. Entre em contato com urgência com nossa equipe: " +
        link(wa("Olá! Preciso alterar ou remarcar meu pedido."), "💬 Falar sobre meu pedido")
    },
    {
      titulo: "🎀 Kits de presente e lembrancinhas",
      keywords: ["presente", "presentes", "kit", "kits", "lembrancinha", "lembrancinhas", "caixinha", "caixa", "mimo"],
      resposta:
        "Desenvolvemos <strong>caixas de doces gourmet elegantes, pães de mel e mimos personalizados</strong>, perfeitos para lembrancinhas de padrinhos, maternidade e datas comemorativas. " +
        link(wa("Olá! Gostaria de consultar opções de kits de presente e lembrancinhas."), "💬 Consultar opções")
    },
    {
      titulo: "👩‍🍳 Quem faz os doces",
      keywords: ["yara", "ribeiro", "confeiteira", "fundadora", "historia", "quem faz", "quem e"],
      resposta:
        "A Doce & Sabor nasceu pelas mãos da chef confeiteira <strong>Yara Ribeiro</strong>, combinando alta confeitaria com ingredientes nobres e produção artesanal no ateliê em Campinas."
    },
    {
      titulo: "📞 Falar com atendente",
      chip: true,
      keywords: ["contato", "atendente", "whatsapp", "zap", "telefone", "falar", "ligar", "humano", "instagram", "redes"],
      resposta:
        "Fale diretamente com nossa equipe pelo <strong>WhatsApp " + CONFIG.whatsappExibicao + "</strong>: " +
        link(wa("Olá! Vim pelo site e gostaria de falar com um atendente."), "💬 Abrir conversa") +
        "<br>Acompanhe também no Instagram: <strong>" + CONFIG.instagram + "</strong>"
    }
  ];

  // Palavras comuns que não devem pontuar na busca
  const STOPWORDS = new Set([
    "que", "uma", "uns", "umas", "para", "com", "por", "mais", "tem", "tenho", "voce", "voces",
    "gostaria", "saber", "quero", "queria", "como", "pode", "podem", "sao", "ser", "dos", "das",
    "nos", "nas", "mas", "ola", "oi", "bom", "dia", "tarde", "noite", "favor", "ajuda", "preciso",
    "sobre", "qual", "quais", "esse", "essa", "isso", "aqui", "meu", "minha", "seu", "sua"
  ]);

  // ============ ESTILOS (paleta do site) ============
  const css = `
    #faq-chatbot-widget { font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    #faq-chatbot-widget *, #faq-chatbot-widget *::before, #faq-chatbot-widget *::after { box-sizing: border-box; }

    #faq-toggle-btn {
      position: fixed; bottom: 30px; right: 28px;
      width: 56px; height: 56px; border-radius: 50%;
      background: #C87D70; color: #fff; border: 2px solid #D4AF37;
      box-shadow: 0 8px 24px rgba(61, 35, 29, 0.28);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      z-index: 1001; transition: transform .25s ease, background .25s ease; padding: 0;
    }
    #faq-toggle-btn:hover { background: #b3685c; transform: scale(1.08); }
    #faq-toggle-btn svg { width: 26px; height: 26px; fill: #fff; pointer-events: none; }

    #faq-chat-window {
      position: fixed; bottom: 100px; right: 28px;
      width: 360px; max-width: calc(100vw - 32px);
      height: 500px; max-height: calc(100vh - 120px);
      background: #FDF8F2; border-radius: 20px;
      border: 1px solid #EFE4D8;
      box-shadow: 0 18px 40px rgba(61, 35, 29, 0.25);
      display: flex; flex-direction: column; overflow: hidden;
      z-index: 1001;
    }
    @supports (height: 100dvh) {
      #faq-chat-window { max-height: calc(100dvh - 120px); }
    }
    #faq-chat-window.faq-hidden { display: none; }

    .faq-header {
      background: #3D231D; color: #FDF8F2;
      padding: 14px 18px; display: flex; align-items: center; justify-content: space-between;
      border-bottom: 2px solid #D4AF37;
    }
    .faq-header-title { font-family: 'Playfair Display', Georgia, serif; font-size: 18px; font-weight: 700; color: #FDF8F2; line-height: 1.2; margin: 0; }
    .faq-header-title em { color: #C87D70; font-style: italic; }
    .faq-header-sub { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #D4AF37; font-weight: 700; margin-top: 2px; }
    #faq-close-btn { background: transparent; border: none; color: #FDF8F2; font-size: 18px; cursor: pointer; opacity: .8; padding: 4px; }
    #faq-close-btn:hover { opacity: 1; color: #D4AF37; }

    #faq-messages {
      flex: 1; padding: 16px; overflow-y: auto;
      display: flex; flex-direction: column; gap: 10px;
    }
    .faq-msg { max-width: 85%; padding: 10px 14px; border-radius: 14px; font-size: 14px; line-height: 1.5; word-wrap: break-word; overflow-wrap: anywhere; }
    .faq-msg.bot { align-self: flex-start; background: #fff; color: #4A3B37; border: 1px solid #EFE4D8; border-bottom-left-radius: 4px; }
    .faq-msg.user { align-self: flex-end; background: #C87D70; color: #fff; border-bottom-right-radius: 4px; }
    .faq-msg strong { color: #3D231D; }
    .faq-msg.user strong { color: #fff; }
    .faq-link { color: #C87D70; font-weight: 700; text-decoration: underline; }
    .faq-link:hover { color: #3D231D; }

    .faq-options { display: flex; flex-wrap: wrap; gap: 6px; }
    .faq-chip {
      background: #fff; color: #3D231D; border: 1px solid #D4AF37;
      padding: 8px 12px; border-radius: 50px; font-size: 12px; font-weight: 600;
      cursor: pointer; font-family: inherit; transition: all .2s ease;
    }
    .faq-chip:hover { background: #3D231D; color: #FDF8F2; border-color: #3D231D; }

    .faq-footer { padding: 12px; background: #fff; border-top: 1px solid #EFE4D8; }
    .faq-input-area { display: flex; gap: 8px; }
    #faq-input {
      flex: 1; min-width: 0; padding: 10px 16px; border: 1px solid #EFE4D8; border-radius: 50px;
      font-size: 16px; /* 16px evita o zoom automático do iOS ao focar o campo */
      font-family: inherit; color: #4A3B37; background: #FDF8F2; outline: none;
    }
    #faq-input:focus { border-color: #C87D70; background: #fff; }
    #faq-send-btn {
      background: #C87D70; border: none; width: 40px; height: 40px; flex-shrink: 0;
      border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0;
      transition: background .2s ease;
    }
    #faq-send-btn:hover { background: #b3685c; }
    #faq-send-btn svg { width: 18px; height: 18px; fill: #fff; }

    @media (max-width: 480px) {
      #faq-toggle-btn { right: 16px; bottom: 20px; }
      #faq-chat-window { right: 16px; bottom: 85px; }
    }
  `;

  // ============ HTML ============
  const tituloHtml = CONFIG.titulo.replace("&", "<em>&amp;</em>");

  const html = `
    <button id="faq-toggle-btn" type="button" aria-label="Abrir chat de atendimento" aria-expanded="false" aria-controls="faq-chat-window">
      <svg id="faq-icon-open" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>
      <svg id="faq-icon-close" viewBox="0 0 24 24" aria-hidden="true" style="display:none;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    </button>

    <div id="faq-chat-window" class="faq-hidden" role="dialog" aria-label="Chat de atendimento">
      <div class="faq-header">
        <div>
          <div class="faq-header-title">${tituloHtml}</div>
          <div class="faq-header-sub">${CONFIG.subtitulo}</div>
        </div>
        <button type="button" id="faq-close-btn" aria-label="Fechar chat">✕</button>
      </div>
      <div id="faq-messages" role="log" aria-live="polite"></div>
      <div class="faq-footer">
        <div class="faq-input-area">
          <input type="text" id="faq-input" placeholder="Digite sua pergunta..." autocomplete="off" maxlength="200" aria-label="Digite sua pergunta" />
          <button type="button" id="faq-send-btn" aria-label="Enviar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // ============ LÓGICA ============
  function init() {
    if (document.getElementById("faq-chatbot-widget")) return;

    const styleTag = document.createElement("style");
    styleTag.textContent = css;
    document.head.appendChild(styleTag);

    const container = document.createElement("div");
    container.id = "faq-chatbot-widget";
    container.innerHTML = html;
    document.body.appendChild(container);

    const toggleBtn = document.getElementById("faq-toggle-btn");
    const closeBtn = document.getElementById("faq-close-btn");
    const chatWindow = document.getElementById("faq-chat-window");
    const iconOpen = document.getElementById("faq-icon-open");
    const iconClose = document.getElementById("faq-icon-close");
    const messagesBox = document.getElementById("faq-messages");
    const sendBtn = document.getElementById("faq-send-btn");
    const input = document.getElementById("faq-input");

    function addMessage(conteudo, tipo) {
      const div = document.createElement("div");
      div.className = "faq-msg " + tipo;
      if (tipo === "user") div.textContent = conteudo;
      else div.innerHTML = conteudo;
      messagesBox.appendChild(div);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    function mostrarChips() {
      const opts = document.createElement("div");
      opts.className = "faq-options";
      FAQ.filter((i) => i.chip).forEach((item) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "faq-chip";
        btn.textContent = item.titulo;
        btn.addEventListener("click", () => {
          addMessage(item.titulo, "user");
          setTimeout(() => addMessage(item.resposta, "bot"), 250);
        });
        opts.appendChild(btn);
      });
      messagesBox.appendChild(opts);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }

    function normalizar(txt) {
      return txt
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    // Pré-processa o FAQ uma única vez (evita normalizar a cada busca)
    FAQ.forEach((item) => {
      item._kw = item.keywords.map(normalizar);
      item._titleWords = new Set(
        normalizar(item.titulo).split(" ").filter((w) => w.length > 3 && !STOPWORDS.has(w))
      );
    });

    function buscarResposta(textoUsuario) {
      const query = normalizar(textoUsuario);
      const queryPad = " " + query + " ";
      const palavras = query.split(" ").filter((w) => w.length > 2 && !STOPWORDS.has(w));

      let melhor = null;
      let maior = 0;

      FAQ.forEach((item) => {
        let pontos = 0;

        item._kw.forEach((kw) => {
          // 1) palavra/expressão inteira presente (palavras mais longas valem mais)
          if (queryPad.includes(" " + kw + " ")) {
            pontos += 4 + Math.min(kw.length, 12) / 3;
            return;
          }
          // 2) variação (plural, flexão): uma começa com a outra
          if (kw.length >= 4 && palavras.some((p) => p.length >= 4 && (p.startsWith(kw) || kw.startsWith(p)))) {
            pontos += 2;
          }
        });

        // 3) palavras inteiras que aparecem no título
        palavras.forEach((p) => {
          if (item._titleWords.has(p)) pontos += 1.5;
        });

        if (pontos > maior) {
          maior = pontos;
          melhor = item;
        }
      });

      if (melhor && maior >= 4) return melhor.resposta;

      return (
        "Não encontrei essa informação por aqui. 😅 Escolha uma das opções do menu ou fale direto com a gente: " +
        link(wa("Olá! Vim pelo site e tenho uma dúvida."), "💬 WhatsApp " + CONFIG.whatsappExibicao)
      );
    }

    function enviar() {
      const txt = input.value.trim();
      if (!txt) return;
      addMessage(txt, "user");
      input.value = "";
      setTimeout(() => addMessage(buscarResposta(txt), "bot"), 350);
    }

    function setAberto(aberto) {
      chatWindow.classList.toggle("faq-hidden", !aberto);
      iconOpen.style.display = aberto ? "none" : "block";
      iconClose.style.display = aberto ? "block" : "none";
      toggleBtn.setAttribute("aria-expanded", String(aberto));
      toggleBtn.setAttribute("aria-label", aberto ? "Fechar chat de atendimento" : "Abrir chat de atendimento");
      if (aberto) input.focus();
    }

    function toggleChat() {
      setAberto(chatWindow.classList.contains("faq-hidden"));
    }

    toggleBtn.addEventListener("click", toggleChat);
    closeBtn.addEventListener("click", () => setAberto(false));
    sendBtn.addEventListener("click", enviar);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.isComposing) {
        e.preventDefault();
        enviar();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !chatWindow.classList.contains("faq-hidden")) {
        setAberto(false);
        toggleBtn.focus();
      }
    });

    addMessage(CONFIG.boasVindas, "bot");
    mostrarChips();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();