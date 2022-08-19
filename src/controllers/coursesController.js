const formatPrice = require('../utils/formatPrice')
const filterByCategory = require('../utils/filterByCategory')
const { Courses } = require('../models')



const coursesController = {
  index: (req, res) => {
    Courses.findAll().then(courses => {
    const categorias = []

    courses.map(course => {
      if (categorias.indexOf(course.categoria) === -1) {
        categorias.push(course.categoria)
      }
    })

      res.render('courses',{
        courses,
        categorias,
        formatPrice,
        filterByCategory
    })
    
    })
  },

  detailsCourse: (req, res) => {
    const  { id } = req.params
    const courseFound = Courses.find((courses) => {
       return courses.id === Number(id)
    })

    res.render('internalCourse', {
        courseFound,
        categorias,
        formatPrice,
        filterByCategory
    })
  }
}

module.exports = coursesController