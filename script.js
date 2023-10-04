// coding challenge dzulfikar omar yasir 
function CheckCats(CatsTuti,CatsNining){
  this.CatsTuti = CatsTuti
  this.CatsNining = CatsNining

  this.CatsTuti.shift()
  this.CatsTuti.pop()
  this.CatsTuti.pop()

  this.updateData = this.CatsTuti.concat(this.CatsNining);
  console.log(this.updateData)
    
  this.output = function(){
    for(let i = 0; i<this.updateData.length;i++){
      if(this.updateData[i] >= 3){
        console.log("Kucing no "+ (i+1) +" adalah kucing dewasa, dan berusia " +  this.updateData[i] +" tahun")
      }else{
        console.log("Kucing no "+ (i+1) +" masih anak-anak (kitten), dan berusia " + this.updateData[i] + " tahun")
      }
    }
  }
}


// Data 1: Data Tuti [3, 5, 2, 12, 7], Data Nining [4, 1, 15, 8, 3]
console.log("Data 1")
const data1 = new CheckCats([3,5,2,12,7],[4,1,15,8,3]).output()

// Data 2: Data Tuti [9, 16, 6, 8, 3], Data Nining [10, 5, 6, 1, 4]
console.log("Data 2")
const data2 = new CheckCats([9,16,6,8,3],[10,5,6,1,4]).output()

