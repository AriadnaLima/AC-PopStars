import villagersModels from "../models/villagersModels";

class Feed {
    async list(req, res) {
        const villager = await villagersModels.find(req.body).sort({"votes": -1})
        res.send(villager)
    }
    async vote(req, res) {
        const villager = await villagersModels.findById(req.body._id)
        let votes = 1
        if (villager["votes"]) {
            votes = villager["votes"] + 1
        }
        await villagersModels.findByIdAndUpdate({_id: req.body._id}, {votes: votes})
        res.send('Votado com sucesso')
    }
}
export default Feed;