const express = require('express')
const router = express.Router()
const {
    getAllListItems,
    getListItem,
    addListItem,
    updateListItem,
    deleteListItem,
} = require('./controllers.js')



router
 .route("/")
 .get(getAllListItems)
 .post(addListItem)


router
 .route('/:id')
 .get(getListItem)
 .patch(updateListItem)
 .delete(deleteListItem)








module.exports = router