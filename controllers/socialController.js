async function shareTrip(req,res){
    try{
        const { userId, tripId, socialMedia, message} = req.body

        res.status(200).json({
            message: 'Trip shared Successfully'
        });
    }

    catch (err){
        res.status(400).json({
            error: error.message
        });
    }
}

module.exports = { shareTrip};