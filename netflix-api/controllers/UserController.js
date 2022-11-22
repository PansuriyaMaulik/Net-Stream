const user = require("../models/UserModel");

module.exports.addToLikedMovies = async () => {
    try {
        const { email, data } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => (id = data.is));
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user.id,
                    {
                        likedMovies: [...user.likedMovies, data],
                    },
                    { new: true }
                )
            }
            else return res.json({ msg: "Movie already added to the liked list" })
        }
        else await User.create({ email, likedMovies: [data] });
        return res.json({ msg: "Movie already added successfully" })
    } catch (error) {
        return resizeBy.json({ msg: "Error adding moive" })
    }
};