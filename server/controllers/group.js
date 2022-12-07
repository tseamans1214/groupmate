const Group = require('../models/group');

module.exports = {
    getGroups: async (req,res)=>{
        console.log(req.user);
        try{
            const groupItems = await Group.find({userId:req.user.id});
            const itemsLeft = await Group.countDocuments({userId:req.user.id,completed: false});
            console.log("Group Items");
            console.log(groupItems);
            res.json(groupItems);
            //res.render('Groups.ejs', {groups: groupItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createGroup: async (req, res)=>{
        try{
            await Group.create({groupName: req.body.groupName, userId: req.user.id, members: []});
            console.log('Group has been added!');
            res.redirect('/account-home');
        }catch(err){
            console.log(err);
        }
    },
    deleteGroup: async (req, res)=>{
        console.log(req.body.groupIdFromJSFile);
        try{
            await Group.findOneAndDelete({_id:req.body.groupIdFromJSFile});
            console.log('Deleted Group');
            res.json('Deleted It');
        }catch(err){
            console.log(err);
        }
    }
}