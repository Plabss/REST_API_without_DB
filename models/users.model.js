const {v4:uuidv4}=require('uuid')

const users=[
    {
        id:uuidv4(),
        username:"Plabon Chowdhury",
        email:"plabonchowdhury9@gmail.com"
    },
    {
        id:uuidv4(),
        username:"Zahidul Islam Joy",
        email:"joy999@gmail.com"
    },
    {
        id:uuidv4(),
        username:"Shabyasachi Das dibbo",
        email:"dibbo@gmail.com"
    }
]

module.exports=users;