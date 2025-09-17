const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        listItemId:{
            type: Number
        },
        dateToBeCompleted:{
           type: Date, 
           required: true
        },
        item:{
            type: String,
            required: true,
        },
        isCompleted : {
            type: Boolean,
            default: false
        },
    }
)

module.exports = mongoose.model("TodoList", todoSchema)