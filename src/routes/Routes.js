const {Router} = require('express')
const router = Router()

const Product = require('../models/products')

router.get('/',async(req,res)=>{
    const products = await Product.find().sort('sorting')
    res.render('index',{products:products})
})
router.post('/add',async(req,res)=>{
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect('/')
})
router.post('/sorting',async(req,res)=>{
    const ids = req.body['id[]']
    for(let i = 0;i < ids.length;i++){
        const id = ids[i]
        const product = await Product.findById(id)
        product.sorting = i
        await product.save()
    }
    // await newProduct.save()
    res.send('ok')
})

module.exports = router