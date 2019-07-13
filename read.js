const fs = require('fs')
// first way of handling error
// fs.readFile('file.txta', 'utf8', function(err, data){
//     if(err){
//         throw new Error('erroro occurse')
//     }
//     console.log(data)
// })

// process.on('uncaughtException', function(error){
//     console.log(error)
// })

// domain model approach

// const domain = require('domain').create()
// domain.run(function(){
//     fs.readFile('file.txtaa', 'utf8', function(err, data){
//             if(err){
//                 throw new Error('erroro occurse')
//             }
//             console.log(data)
//         })
// })

// domain.on('error', function(error){
//         console.log(error)
//     })

posts = [{name:'first'},{name:'second'}]

function add(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            posts.push({name:'third'})
            resolve(posts)
        }, 110)
    })
    
}

function show(){
    setTimeout(function(){
        console.log(posts)
    }, 100)
}

async function init(){
    await add()
    show()
}

init()

console.log(add())

