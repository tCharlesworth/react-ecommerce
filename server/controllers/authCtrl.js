module.exports = {
    validateUser(username, password) {
        return null;
    },
    // Serialize takes a user and explicitly defines properties to include.
    serializeUser(user) {
        return { name: user.name, id: user.id };
    }
};