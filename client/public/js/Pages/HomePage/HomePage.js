import Nav from "../../Components/Nav/Nav.js";
import Page from "../Page.js";

export default class HomePage extends Page {
    constructor(params) {
        super(params);
        this.comps.Add("nav", new Nav())
    };

    getHtml() {
        return `
            ${this.comps.Render("nav")}
            <div>
            Home
            </div>
        `
    };
};