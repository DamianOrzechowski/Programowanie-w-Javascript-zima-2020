function Percussion(SoundId) {
    this.SoundId = SoundId
    this.soundDate = Date.now()
    // Wyszukuje dźwięk
    this.PlaySound = () => {
        const sound = document.querySelector(`#${SoundId}`)
        sound.play()
    }
}

export default Percussion
