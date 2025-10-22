exports.MenuPage = class menu {
    constructor(page) {
        this.page = page;
    }

    async gotoLogin() {
        await this.page.goto('http://the-internet.herokuapp.com/login')
    }
}