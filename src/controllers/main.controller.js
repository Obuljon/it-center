class Main {
    homePage(req, res){
        res.render("main/home")
    }
    coursesPage(req, res){
        res.render("main/courses")
    }
    pricingPage(req, res){
        res.render("main/pricing")
    }
    contactPage(req, res){
        res.render("main/contact")
    }
}
export default new Main()

