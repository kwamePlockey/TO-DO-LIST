const TodoList = require('./model.js')

const addListItem = async (req, res) => {
    const {date, text} = req.body
    try {
        let idOfLastItem = await TodoList.find().countDocuments()

        const actionItem = {
            listItemId: ++idOfLastItem,
            dateToBeCompleted: new Date(date),
            item: text,
        }

        const data = await TodoList.create(actionItem)
        res.json({
            message: 'list added successfully ',
            list : data,
        })
        
    } catch (error) {
        console.log(error)
    }
}

const getAllListItems = async (req, res) => {
    try {
        const listData = await TodoList.find()

        res.json({
            message: 'success',
            data : listData,
        })

    } catch (error) {
        console.log(error)
    }
}
const getListItem = async (req, res) => {
    try {
        const listID = req.params.id
        const listInfo = await TodoList.findOne({listItemId: listID})

        res.json({
            message: 'success',
            data : listInfo,
        })

    } catch (error) {
        console.log(error)
    }
}


const updateListItem = async (req, res) => {
    try {
        const listID = req.params.id
        const{date, text, status} = req.body

        const listInfo = await TodoList.findOneAndUpdate({listItemId: listID}, 
            {
            date: date,
            item: text, 
            isCompleted: status
            }, 
            {new: true}
        )

        const updatedLists = await TodoList.find()


        res.json({
            message: 'update success',
            data: updatedLists,
            updatedList: listInfo
        })

    } catch (error) {
        console.log(error)
    }
}
    
const deleteListItem = async (req, res) => {
    try {
        const listID = req.params.id

        await TodoList.findOneAndDelete({listItemId: listID})
        const updatedLists = await TodoList.find()


        res.json({
            message: 'list deleted successfully',
            data : updatedLists,
        })
    } catch (error) {
        console.log(error)
    }
}













module.exports = {
    getAllListItems,
    getListItem,
    addListItem,
    updateListItem,
    deleteListItem,
}