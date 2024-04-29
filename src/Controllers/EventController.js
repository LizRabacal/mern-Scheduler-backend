const Events = require('../Models/EventData');


module.exports = {

    async read(req, res) {
        const eventList = await Events.find();

        return res.json(eventList);
    },


    async create(req, res) {
        const { title, start, end, tags, desc, isaholiday, cor } = req.body;

        if (!title || !start || !end) {

            return res.status(400).json({ error: "Necessário título, começo e fim do evento" });

        }

        const eventCreated = await Events.create({
            title,
            start,
            end,
            tags,
            desc,
            isaholiday,
            cor
        });

        return res.json(eventCreated);


        console.log(title, start, end);

    },


    async delete(req, res) {

        const { id } = req.params;


        const eventDeleted = await Events.findOneAndDelete({ _id: id });

        if (eventDeleted) {
            return res.json(eventDeleted);
        }

        return res.status(400)
    },




    async update(req, res) {
        const { title, start, end, tags, desc } = req.body;
        const { id } = req.params;


        const updatedEvent = Events.findByIdAndUpdate(id, {
            title: title,
            start: start,
            end: end,
            tags: tags,
            desc: desc
        }, { new: true })
            .then(e => console.log(e));

        if (!updatedEvent) {
            return res.status(404).json({ error: "Evento não encontrado." });
        }

        return res.json(updatedEvent);

    }


}