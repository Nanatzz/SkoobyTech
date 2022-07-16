// const getInfoDatabase = require('../utils/getInfoDatabase')
const formatPrice = require('../utils/formatPrice')

// const courses = getInfoDatabase('courses')


const coursesController = {
  index: (res, req) => {
    res.render('courses',{
        courses,
        formatPrice
    })
  },

  details: (res, req) => {
    const  { id } = req.params
    const courseFound = courses.find((courses) => {
       return course.id === Number(id)
    })

    res.render('detailcourse', {
        courseFound,
        formatPrice
    })
  }
}

module.exports = coursesController