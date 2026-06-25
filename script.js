/* ----------------------------------------------------
   1. CONTROLO DO TAMANHO DA LETRA
   ---------------------------------------------------- */
function setFontSize(tamanho) {
  // Remover as classes de tamanho antigas do body
  document.body.classList.remove('fonte-normal', 'fonte-grande', 'fonte-gigante');
  
  // Adicionar a classe selecionada explicitamente para evitar erros de string
  if (tamanho === 'normal') document.body.classList.add('fonte-normal');
  if (tamanho === 'grande') document.body.classList.add('fonte-grande');
  if (tamanho === 'gigante') document.body.classList.add('fonte-gigante');

  // Atualizar a classe ativa visual nos botões
  document.getElementById('btn-fonte-normal').classList.remove('ativo');
  document.getElementById('btn-fonte-grande').classList.remove('ativo');
  document.getElementById('btn-fonte-gigante').classList.remove('ativo');

  // Adiciona o estado ativo no botão correspondente
  document.getElementById('btn-fonte-' + tamanho).classList.add('ativo');
}

/* ----------------------------------------------------
   2. CONTROLO DO MODO DE ALTO CONTRASTE
   ---------------------------------------------------- */
function setContrast(eAltoContraste) {
  const btnNormal = document.getElementById('btn-contraste-normal');
  const btnAlto = document.getElementById('btn-contraste-alto');

  if (eAltoContraste) {
    document.body.classList.add('alto-contraste');
    btnAlto.classList.add('ativo');
    btnNormal.classList.remove('ativo');
  } else {
    document.body.classList.remove('alto-contraste');
    btnNormal.classList.add('ativo');
    btnAlto.classList.remove('ativo');
  }
}

/* ----------------------------------------------------
   3. SISTEMA DE RESPOSTA DO SIMULADOR (QUIZ) - CORRIGIDO
   ---------------------------------------------------- */
function submitQuiz(escolhaUtilizador) {
  const caixaResposta = document.getElementById('caixa-resultado-quiz');
  const tituloResultado = document.getElementById('titulo-resultado-quiz');
  const textoResultado = document.getElementById('texto-resultado-quiz');
  
  const btnSeguro = document.getElementById('btn-quiz-seguro');
  const btnFraude = document.getElementById('btn-quiz-fraude');

  // Limpar estados visuais anteriores de erro/sucesso dos botões
  btnSeguro.classList.remove('selecionado-errado', 'selecionado-correto');
  btnFraude.classList.remove('selecionado-errado', 'selecionado-correto');

  // Tornar o bloco de resposta visível
  caixaResposta.style.display = 'block';

  if (escolhaUtilizador === 'seguro') {
    // CORREÇÃO: Resposta Incorreta agora pinta o botão de Vermelho (selecionado-errado)
    btnSeguro.classList.add('selecionado-errado');
    
    caixaResposta.style.backgroundColor = 'var(--danger-light)';
    caixaResposta.style.borderColor = 'var(--danger-color)';
    
    tituloResultado.style.color = 'var(--danger-color)';
    tituloResultado.textContent = '⚠️ Cuidado! Seria muito perigoso';
    textoResultado.textContent = 'Este endereço não pertence a nenhum banco oficial. Os criminosos utilizam links falsos semelhantes para roubar dados de acesso às contas ou para instalar vírus no seu telemóvel. O correto é nunca clicar.';
  } else {
    // CORREÇÃO: Resposta Correta agora pinta o botão de Verde (selecionado-correto)
    btnFraude.classList.add('selecionado-correto');
    
    caixaResposta.style.backgroundColor = 'var(--success-light)';
    caixaResposta.style.borderColor = 'var(--success-color)';
    
    tituloResultado.style.color = 'var(--success-color)';
    tituloResultado.textContent = '🌟 Decisão Brilhante! Está no caminho certo';
    textoResultado.textContent = 'Exatamente! Os bancos de confiança nunca pedem a verificação de contas ou o cancelamento de compras através de links enviados por SMS. Fez muito bem em ignorar.';
  }
}

/* ----------------------------------------------------
   4. CONTROLO DO CHECKLIST E BARRA DE PROGRESSO
   ---------------------------------------------------- */
function toggleChecklist(idItem) {
  const elementoLabel = document.getElementById(idItem);
  const caixaSelecao = elementoLabel.querySelector('.caixa-selecao-gigante');

  // Atualizar o visual do item com base na seleção
  if (caixaSelecao.checked) {
    elementoLabel.classList.add('concluido');
  } else {
    elementoLabel.classList.remove('concluido');
  }

  // Calcular o progresso total
  const totalItens = document.querySelectorAll('.item-checklist').length;
  const itensConcluidos = document.querySelectorAll('.item-checklist.concluido').length;
  
  const percentagem = Math.round((itensConcluidos / totalItens) * 100);

  // Atualizar a barra de progresso no ecrã
  document.getElementById('barra-checklist').style.width = percentagem + '%';
  document.getElementById('porcentagem-checklist').textContent = percentagem + '% Completo';
}
document.querySelectorAll(".cartao-dica").forEach(c=>c.onclick=()=>document.getElementById(c.dataset.modal).classList.add("mostrar"));
document.querySelectorAll(".fechar-modal").forEach(b=>b.onclick=()=>b.closest(".modal-dica").classList.remove("mostrar"));
