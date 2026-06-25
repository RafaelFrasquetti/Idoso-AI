 /* ----------------------------------------------------
   1. CONTROLO DO TAMANHO DA LETRA
   ---------------------------------------------------- */
function setFontSize(size) {
  // Alterado de document.body para buscar a tag <corpo>
  const corpoDoc = document.querySelector('corpo');
  corpoDoc.classList.remove('font-normal', 'font-large', 'font-huge');
  
  // Adicionar a classe selecionada
  corpoDoc.classList.add('font-' + size);

  // Atualizar a classe ativa visual nos botões
  document.getElementById('btn-font-normal').classList.remove('active');
  document.getElementById('btn-font-large').classList.remove('active');
  document.getElementById('btn-font-huge').classList.remove('active');

  document.getElementById('btn-font-' + size).classList.add('active');
}

/* ----------------------------------------------------
   2. CONTROLO DO MODO DE ALTO CONTRASTE
   ---------------------------------------------------- */
function setContrast(isHigh) {
  const corpoDoc = document.querySelector('corpo');
  
  if (isHigh) {
    corpoDoc.classList.add('high-contrast');
    document.getElementById('btn-contrast-high').classList.add('active');
    document.getElementById('btn-contrast-normal').classList.remove('active');
  } else {
    corpoDoc.classList.remove('high-contrast');
    document.getElementById('btn-contrast-normal').classList.add('active');
    document.getElementById('btn-contrast-high').classList.remove('active');
  }
}

/* ----------------------------------------------------
   3. SISTEMA DE RESPOSTA DO SIMULADOR (QUIZ)
   ---------------------------------------------------- */
function submitQuiz(userChoice) {
  const responseBox = document.getElementById('quiz-result-box');
  const resultTitle = document.getElementById('quiz-result-title');
  const resultText = document.getElementById('quiz-result-text');
  
  const btnSafe = document.getElementById('btn-quiz-safe');
  const btnScam = document.getElementById('btn-quiz-scam');

  // Limpar estados visuais anteriores dos botões
  btnSafe.classList.remove('selected-safe');
  btnScam.classList.remove('selected-scam');

  // Tornar o bloco de resposta visível
  responseBox.style.display = 'block';

  if (userChoice === 'safe') {
    // Escolha incorreta do utilizador
    btnSafe.classList.add('selected-safe');
    
    responseBox.style.backgroundColor = 'var(--danger-light)';
    responseBox.style.borderColor = 'var(--danger-color)';
    
    resultTitle.style.color = 'var(--danger-color)';
    resultTitle.textContent = '⚠️ Cuidado! Seria muito perigoso';
    resultText.textContent = 'Este endereço não pertence a nenhum banco oficial. Os criminosos utilizam links falsos semelhantes para roubar dados de acesso às contas ou para instalar vírus no seu telemóvel. O correto é nunca clicar.';
  } else {
    // Escolha correta do utilizador
    btnScam.classList.add('selected-scam');
    
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
  const checkbox = labelElement.querySelector('.giant-checkbox');

  // Atualizar o visual do item com base na seleção
  if (checkbox.checked) {
    labelElement.classList.add('completed');
  } else {
    labelElement.classList.remove('completed');
  }

  // Calcular o progresso total
  const totalItems = document.querySelectorAll('.checklist-item').length;
  const completedItems = document.querySelectorAll('.checklist-item.completed').length;
  
  const percentage = Math.round((completedItems / totalItems) * 100);

  // Atualizar a barra de progresso no ecrã
  document.getElementById('checklist-bar').style.width = percentage + '%';
  document.getElementById('checklist-percentage').textContent = percentage + '% Completo';
}