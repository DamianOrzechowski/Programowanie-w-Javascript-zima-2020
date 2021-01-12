function Chanel() {
    this.Tracks = []
    // dodaje dzwieki do tablicy
    this.AddSound = (sound) => {
        this.Tracks.push(sound)
    }
    // rozpoczyna nagrywanie
    this.StartRec = () => {
        this.Tracks.length = 0
        this.recStartDate = Date.now()
    }
    // odgrywa dzwięki z tablicy
    this.Playsounds = () => {
        this.Tracks.forEach((sound) => {
            setTimeout(() => {
                sound.PlaySound()
            },
            sound.soundDate - this.recStartDate)
        })
    }
    // odpala ostatni przyciśnięty dźwięk
    this.playNewest = () => {
        this.Tracks[this.Tracks.length - 1].PlaySound()
    }
}

export default Chanel
