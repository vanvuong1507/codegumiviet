
exports.getUsers = (req, res)=>{
    User.find({}).exec((err, data)=>{
        if(err){
            console.log(err);
            return res.send({err});
        }else{
            console.log(data);
            return res.send({data});
        }
        
});
     
};
module.exports = exports;
