"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(rep, res) {
        res.send('Hello');
    }
}
exports.indexController = new IndexController();
