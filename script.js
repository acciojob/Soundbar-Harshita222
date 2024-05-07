//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const buttonsContainer = document.getElementById('buttons');
  const stopButton = document.querySelector('.stop');

  // Add event listener to each button
  buttonsContainer.addEventListener('click', function(event) {
    const button = event.target;
    const sound = button.getAttribute('data-sound');
    if (sound) {
      playSound(sound);
    }
  });

  // Add event listener to stop button
  stopButton.addEventListener('click', stopAllSounds);

  // Function to play a sound
  function playSound(sound) {
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
  }

  // Function to stop all sounds
  function stopAllSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => sound.pause());
  }
});
