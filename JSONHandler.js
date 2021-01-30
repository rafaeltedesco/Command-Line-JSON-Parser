const fs = require('fs')

const createHandler = ()=> {

}

class Handler {
  constructor(filename, data=null){
    this.filename = filename
    this.data = data
  }

  stringify() {
    if (this.data) {
      return JSON.stringify(this.data)
    }
    else {
      throw "There is no data!"
    }
    
  }

  write() {
    if (this.data) {
      let jsonData = this.stringify(this.data)
      fs.writeFile(`${this.filename}.json`, jsonData, (err)=> {
        if (err) throw err
        console.log('Data stored!')
      })
    }
    else {
      throw "There is no data!"
    }
  }
  
  read() {
    fs.readFile(this.filename, (err, bufferData)=> {
      let dataJSON = bufferData.toString()
      let data = JSON.parse(dataJSON)
      console.log('Your data:\n' + dataJSON)
    })
    
  }
    
  

}

module.exports = Handler