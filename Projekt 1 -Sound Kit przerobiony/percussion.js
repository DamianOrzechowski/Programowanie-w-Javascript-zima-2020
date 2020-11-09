function Percussion (SoundId) {
   this.SoundId = SoundId;
   this.soundDate = Date.now()
    this.Test =() => {
      console.log('działa')
    }
    this.PlaySound =() => {
      const sound = document.querySelector('#' + SoundId);
      sound.play();
    }
    
  }

  
  export default Percussion