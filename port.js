const ParseArgs = require('minimist')

const options ={
    alias:{
        m:"modo",
        p:"port",
        d:"debug"
    },
    default:{
        modo:'prod',
        port:'8080',
        debug: false
    }
}

const argv = process.argv;

const {modo,port,debug,_} = ParseArgs(argv,options)

console.log({modo,port,debug,otros:_})
