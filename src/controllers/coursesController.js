// const getInfoDatabase = require('../utils/getInfoDatabase')
const formatPrice = require('../utils/formatPrice')
const { Courses } = require('../models')
// const courses = getInfoDatabase('courses')


const coursesController = {
  index: async (res, req) => {
    const courses = await Courses.findAll()

    req.render('courses',{
        courses,
        formatPrice
    })
  },

  detailsCourse: (res, req) => {
    const  { id } = req.params
    const courseFound = Courses.find((courses) => {
       return courses.id === Number(id)
    })

    res.render('detail-course', {
        courseFound,
        formatPrice
    })
  }
}

module.exports = coursesController