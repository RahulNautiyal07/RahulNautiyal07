const userModal = require("../models/user");
const queryModal = require("../models/query");

exports.joinUser = async (req, res) => {
    console.log('yahoo',req.body.userType)
  const {
    userType,
    stayingCountry,
    stayingState,
    stayingDistrict,
    firstName,
    lastName,
    email,
    phoneNumber,
    countryFrom,
    stateFrom,
    districtFrom
  } = req.body;

  if (userType && firstName && lastName && email && phoneNumber) {
    try {
      let newUser = new userModal({
        firstName:firstName,
        lastName:lastName,
        country:stayingCountry,
        state:stayingState,
        district:stayingDistrict,
        userType:userType,
        email:email,
        phoneNumber:phoneNumber,
        nativeCountry: countryFrom,
        nativeState: stateFrom,
        nativeDistrict: districtFrom,
        club:stayingDistrict
      }).save();

      newUser
        ? res.json({ status: true, result: newUser })
        : res.json({ status: false, result: newUser });
    } catch (e) {
      res.json({ status: false, result: e });
    }
  }
};

exports.getHelp = async (req, res) => {
  const {
    countryFrom,
    stateFrom,
    districtFrom,
    needHelpCountry,
    needHelpDistrict,
    needHelpState,
    firstName,
    lastName,
    email,
    phoneNumber,
    query
  } = req.body;
  
  let userType = countryFrom.toLowerCase() === 'india' ? 'NRI-Parent' : 'NRI' ;
   console.log(userType,'kjkj')

  if (firstName && phoneNumber && countryFrom && stateFrom && districtFrom && needHelpCountry && needHelpState && needHelpDistrict) {
    try {
      const newUser =  new userModal({
        firstName:firstName,
        lastName:lastName,
        country:countryFrom,
        state:stateFrom,
        district:districtFrom,
        userType:userType,
        email:email,
        phoneNumber:phoneNumber

      }).save();

      await newUser.then(async (data)=>{
        console.log(data)
          const newQuery = await new queryModal({
            userId: data._id,
            query:query,
            country:needHelpCountry,
            state:needHelpState,
            district:needHelpDistrict
          }).save();
          newQuery
            ? res.json({ status: true, result: newQuery })
            : res.json({ status: false, result: newQuery });
      })
    } catch (e) {
      res.json({ status: false, result: e });
    }
  } else{
      res.json({status: false, result: 'Form is not filled properly'})
  }
};
