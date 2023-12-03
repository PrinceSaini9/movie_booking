
async function signup(){
    const data = new userModel({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact
            
              });
            
              try {
                const dataToSave = await data.save();
                res.status(200).json(dataToSave);
              } catch (error) {
                res.status(400).json({message : error.message});
              }
}

