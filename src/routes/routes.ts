import Feed from "../controllers/Feed"

 const routes = (app) => {
    const feed = new Feed()
    app.post('/list', feed.list);
    app.post('/vote', feed.vote);
}

export default routes