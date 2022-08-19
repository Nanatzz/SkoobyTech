function filterByCategory(courses, category) {
    return courses.filter(course => course.categoria === category)
}

module.exports = filterByCategory