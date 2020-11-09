function Chanel(){
    this.Tracks = []

    this.AddSound =(sound) =>{
        this.Tracks.push(sound);
    }
    this.StartRec =() =>{
        this.Tracks.length = 0;
        this.recStartDate = Date.now();
    }

    this.Playsounds = () =>{
          this.Tracks.forEach(sound => {
         setTimeout(()=>{
            sound.PlaySound()
         },
         sound.soundDate - this.recStartDate
         )

        
         }
          )
}
this.playNewest = () => {
    this.Tracks[this.Tracks.length - 1].PlaySound()
}
}


export default Chanel