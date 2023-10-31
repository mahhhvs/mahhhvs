const textInput = document.getElementById('text-input');
const listenButton = document.getElementById('listen-button');
const synth = window.speechSynthesis;

listenButton.addEventListener('click', () => {
  const textToSpeak = textInput.value;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterance);
});