function Chanel(){
    this.Tracks = []

    this.AddSound =(sound) =>{
        this.Tracks.push(sound)
    }

    this.Playsounds = () =>{
          this.Tracks.forEach(sound => {
         setTimeout(()=>{
            sound.PlaySound()
         },
         1000
         )

        
    }
}
}


export default Chanel