const fs = require('fs')
const Handler = require('./JSONHandler')
const yargs = require('yargs')


let book = {
  title: 'Como Fazer Amigos e Influenciar Pessoas',
  author: 'Dale Carnegie'
}


yargs.command({
  command: 'create',
  describe: 'Create a new Handler',
  handler: (argv)=> {
    let bookHandler = new Handler(argv.filename, book)
    bookHandler.write()
  },
  builder: {
    filename: {
      describe: 'The filename',
      demandOption: true,
      type: 'string'
    }
  }
})


yargs.command({
  command: 'read',
  describe: 'Parse and Read JSON',
  handler: (argv)=> {
    let bookHandler = new Handler(argv.filename)
    bookHandler.read()
  },
  builder: {
    filename: {
      describe: 'The filename',
      demandOption: true,
      type: 'string'
    }
  }
})

yargs.parse()



