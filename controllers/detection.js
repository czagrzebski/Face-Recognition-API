

const handleDetection = (clarifaiApp) => (req, res) => {
    const { imageURL } = req.body;

    clarifaiApp.models.predict(Clarifai.FACE_DETECT_MODEL, imageURL)
        .then(response => {
          res.json(response.outputs[0].data.regions[0].region_info.bounding_box)
        })
        .catch(err => {
          res.status(400).json("clarifai api error");
        }); 
}


module.exports = {
    handleDetection: handleDetection
}