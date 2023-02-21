class Home {
    homePage(req, res) {
        res.render('main/home');
    }
}

export default new Home()