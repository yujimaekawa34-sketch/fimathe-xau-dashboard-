const $ = (id) => document.getElementById(id);
let robotOn = false;
let emergency = false;
function setRobotState(on){
  robotOn = !!on && !emergency;
  $('robot-chip').textContent = robotOn ? 'SIMULADO · ON' : 'SIMULADO · OFF';
  $('robot-chip').className = 'status-chip ' + (robotOn ? 'active' : 'stopped');
  $('robot-orb').classList.toggle('on', robotOn);
  $('robot-orb').querySelector('span').textContent = robotOn ? 'ON' : 'OFF';
  $('robot-state-title').textContent = robotOn ? 'Robô ativo (simulação)' : 'Robô pausado';
  $('robot-state-desc').textContent = robotOn ? 'Estado local de demonstração. Nenhuma ordem será enviada.' : 'Controle demonstrativo. Nenhuma ordem será enviada.';
  $('toggleRobot').textContent = robotOn ? 'Desligar (simulação)' : 'Ligar (simulação)';
  $('toggleRobot').disabled = emergency;
  $('toggleRobot').style.opacity = emergency ? '.5' : '1';
}
$('toggleRobot').addEventListener('click',()=>setRobotState(!robotOn));
$('stopBtn').addEventListener('click',()=>{
  emergency = true; setRobotState(false);
  $('stopBtn').textContent = 'STOP ATIVADO · DEMO';
  $('stopBtn').disabled = true;
  $('stopBtn').style.opacity = '.7';
  alert('Stop demonstrativo ativado. Isto não afeta o MT5 nem fecha ordens reais.');
});
$('saveRisk').addEventListener('click',()=>{
  const risk = Number($('risk').value), limit = Number($('dailyLimit').value), trades = Number($('maxTrades').value);
  if(!Number.isFinite(risk)||risk<0.1||risk>3||!Number.isFinite(limit)||limit<0.1||limit>5||!Number.isFinite(trades)||trades<1||trades>10){
    $('saveStatus').textContent='Valores fora do intervalo permitido'; $('saveStatus').style.color='var(--red)'; return;
  }
  $('saveStatus').textContent='Salvo apenas nesta sessão (demo)'; $('saveStatus').style.color='var(--green)';
  setTimeout(()=>{$('saveStatus').textContent='';},3500);
});
$('lastUpdated').textContent='Atualizado: '+new Date().toLocaleString('pt-BR');
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
