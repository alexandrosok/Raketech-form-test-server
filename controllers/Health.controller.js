const GetAppHealth = (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'App Health',
    });
}


module.exports = {
    actions: {
        GetAppHealth
    }
};
