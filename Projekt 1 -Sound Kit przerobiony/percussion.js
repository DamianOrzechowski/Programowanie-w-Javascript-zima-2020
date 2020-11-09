function Percussion (SoundId) {
   this.SoundId = SoundId;
    this.Test =() => {
      console.log('działa')
    }
    this.PlaySound =() => {
      const sound = document.querySelector('#' + SoundId);
      sound.play();
    }
    
  }

  
  export default Percussion