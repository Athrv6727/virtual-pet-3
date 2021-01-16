class Food{
 constructor(){
   this.foodStock=null
   this.lastFed=null
   this.image=loadImage("Milk.png")
   }

 getFoodStock(){
this.foodStock=database.ref('Food')
this.foodStock.on("value",function(data){
  this.foodStock = data.val();
})
 }
 updateFoodStock(Food){
  database.ref('/').update({
    gameState: state
  });
 }
deductFoodStock(){

}
washroom(){
 background(washroomImg,200,200) 
}
bedRoom(){
background(bedroomImg,200,200)
}
garden(){
  background(gardenImg,200,200)
}
display(){
    var x=80,y=100;

    imageMode(CENTER)
    image(this.image,720,220,70,70)

    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10===0){
          x=80
          y=y+50
        }
        image(this.image,x,y,50,50)
      }
    }
}
}