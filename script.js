/* ----------------------------------------------------
   1. CONTROLO DO TAMANHO DA LETRA
   ---------------------------------------------------- */
function setFontSize(size) {
  // Remover as classes de tamanho antigas do body
  document.body.classList.remove('fonte-normal', 'fonte-grande', 'fonte-gigante');
  
  // Adicionar a classe selecionada
  if (size === 'normal') document.body.classList.add('fonte-normal');
  if (size === 'large') document.body.classList.add('fonte-grande');
  if (size === 'huge') document.body.classList.add('fonte-gigante');

  // Atualizar a classe ativa visual nos botões
  document.getElementById('btn-fonte-normal').classList.remove('ativo');
  document.getElementById('btn-fonte-grande').classList.remove('ativo');
  document.getElementById('btn-fonte-gigante').classList.remove('ativo');

  if (size === 'normal') document.getElementById('btn-fonte-normal').classList.add('ativo');
  if (size === 'large') document.getElementById('btn-fonte-grande').classList.add('ativo');
  if (size === 'huge') document.getElementById('btn-fonte-gigante').classList.add('ativo');
}

/* ----------------------------------------------------
   2. CONTROLO DO MODO DE ALTO CONTRASTE
   ---------------------------------------------------- */
function setContrast(isHigh) {
  if (isHigh) {
    document.body.classList.add('alto-contraste');
    document.getElementById('btn-contraste-alto').classList.add('ativo');
    document.getElementById('btn-contraste-normal').classList.remove('ativo');
  } else {
    document.body.classList.remove('alto-contraste');
    document.getElementById('btn-contraste-normal').classList.add('ativo');
    document.getElementById('btn-contraste-alto').classList.remove('ativo');
  }
}

/* ----------------------------------------------------
   3. SISTEMA DE RESPOSTA DO SIMULADOR (QUIZ)
   ---------------------------------------------------- */
function submitQuiz(userChoice) {
  const responseBox = document.getElementById('caixa-resultado-quiz');
  const resultTitle = document.getElementById('titulo-resultado-quiz');
  const resultText = document.getElementById('texto-resultado-quiz');
  
  const btnSafe = document.getElementById('btn-quiz-seguro');
  const btnScam = document.getElementById('btn-quiz-fraude');

  // Limpar estados visuais anteriores dos botões
  btnSafe.classList.remove('selecionado-seguro');
  btnScam.classList.remove('selecionado-fraude');

  // Tornar o bloco de resposta visível
  responseBox.style.display = 'block';

  if (userChoice === 'safe') {
    // Escolha incorreta do utilizador
    btnSafe.classList.add('selecionado-seguro');
    
    responseBox.style.backgroundColor = 'var(--danger-light)';
    responseBox.style.borderColor = 'var(--danger-color)';
    
    resultTitle.style.color = 'var(--danger-color)';
    resultTitle.textContent = '⚠️ Cuidado! Seria muito perigoso';
    resultText.textContent = 'Este endereço não pertence a nenhum banco oficial. Os criminosos utilizam links falsos semelhantes para roubar dados de acesso às contas ou para instalar vírus no seu telemóvel. O correto é nunca clicar.';
  } else {
    // Escolha correta do utilizador
    btnScam.classList.add('selecionado-fraude');
    
    responseBox.style.backgroundColor = 'var(--success-light)';
    responseBox.style.borderColor = 'var(--success-color)';
    
    resultTitle.style.color = 'var(--success-color)';
    resultTitle.textContent = '🌟 Decisão Brilhante! Está no caminho certo';
    resultText.textContent = 'Exatamente! Os bancos de confiança nunca pedem a verificação de contas ou o cancelamento de compras através de links enviados por SMS. Fez muito bem em ignorar.';
  }
}

/* ----------------------------------------------------
   4. CONTROLO DO CHECKLIST E BARRA DE PROGRESSO
   ---------------------------------------------------- */
function toggleChecklist(itemId) {
  const labelElement = document.getElementById(itemId);
  const checkbox = labelElement.querySelector('.caixa-selecao-gigante');

  // Atualizar o visual do item com base na seleção
  if (checkbox.checked) {
    labelElement.classList.add('concluido');
  } else {
    labelElement.classList.remove('concluido');
  }

  // Calcular o progresso total
  const totalItems = document.querySelectorAll('.item-checklist').length;
  const completedItems = document.querySelectorAll('.item-checklist.concluido').length;
  
  const percentage = Math.round((completedItems / totalItems) * 100);

  // Atualizar a barra de progresso no ecrã
  document.getElementById('barra-checklist').style.width = percentage + '%';
  document.getElementById('porcentagem-checklist').textContent = percentage + '% Completo';
}