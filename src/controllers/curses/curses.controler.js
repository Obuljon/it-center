class Courses {
    coursesPage(req, res){
        res.render("main/courses")
    }
    coursesAdd(req, res){
        res.render("main/coursesadd")
    }
}
export default new Courses()