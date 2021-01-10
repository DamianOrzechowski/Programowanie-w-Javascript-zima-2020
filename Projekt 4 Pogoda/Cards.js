import Card from './Card.js';
import Db from './DB.js'
import UI from './UI.js'
class Cards {
    constructor(containerSelector) {
        this.CardsArr = [];
        this.db = new Db();
        this.UIcards = new UI(containerSelector)
    }

    addCard (card) {
        //pierwszy spsób
        //card.fetchData()
        /*const promises = new Promise((resolve,reject) =>{
            setTimeout(() =>{resolve("overment") },2000)
             
        })
        promises.then(
          result=>  this.CardsArr.push(card)
        )
        promises.then(
            result=>   this.UIcards.addCard(card)
        )
        promises.then(
         result => this.db.saveCards(this.CardsArr))*/
        ///////
        /*const promises = new Promise((resolve,reject)=>{
            resolve(card.fetchData())
            
        })*/
        card.fetchData().then(
            result=>  this.CardsArr.push(card)

          )
          .then(
              result=>   this.UIcards.addCard(card)
          )
          .then(
           result => {
               this.db.saveCards(this.CardsArr)
               console.log('koniec dodawania')
           })
           

        
      }
    removeNote(id) {
        
    }
    getCards() {
        return this.CardsArr;
    } 
    getCard(id) {
        return this.CardsArr.find(el => el.id === id);
    } 
    loadCardsFromLocalStorage(){
        if(this.db.getCards()){
        this.CardsArr = this.db.getCards()
        this.CardsArr.forEach(card => {
            this.UIcards.addCard(card)
        
        }) };
    }
}
export default Cards