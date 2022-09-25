const productModel = require('../models/ProductSchema');

const addressModel = require('../models/AddressSchema');
const User = require('../models/UserSchema');
const validator = require('../utilities/validator')

// sample code for adding users

exports.addUser = async (req, res) => {
    console.log(req.body)
    try {
        const user = new User({
            userId: req.body.userId,
            userName: req.body.userName,
            password: req.body.password

        })
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
        user.save();

    } catch (err) {
        console.log(err);
        res.status(400).json({
            "message": "Something went wrong",
        })
    }

}



exports.getProducts = async (req, res) => {
    try {
        const resp = await productModel.find({}, {
            _id: 0,
            __v: 0
        });

        res.status(200).json(resp)
    } catch (err) {
        res.status(400).json({
            "status": "fail",
            "message": "Something went wrong"
        })
    }
}

//view addresss
exports.getAddress = async (req, res) => {

    try {
        const resp = await addressModel.find({
            userId: req.params.userId,
            addressId: req.params.addressId
        }, {
            _id: 0,
            userId: 0,
            __v: 0
        });

        res.status(200).json({
            status: 'success',
            data: {
                resp,
            },
        });
    } catch (err) {
        res.status(400).json({
            "status": "fail",
            "message": "Either user id or address id is wrong"
        })
    }
}

//get addresss
exports.addAddress = async (req, res) => {


    try {
        const getId = await addressModel.find({});
        let addressId = `AI-${1+getId.length}`;
        let id = req.params.userid;
        console.log(req.body);
        console.log(id);
        const user = await User.find({
            userId: req.params.userid
        });
        if (user.length != 0) {
            if (validator.validatePhone(req.body.phoneNumber) &&
                validator.validatePin(req.body.pinCode) &&
                validator.validateCity(req.body.city) &&
                validator.validateState(req.body.state)) {
                const address = await addressModel.create({
                    userId: id,
                    addressId: addressId,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    pinCode: req.body.pinCode,
                    phoneNumber: req.body.phoneNumber,
                })
                res.status(200).json({
                    "message": "address Successfully added",
                    "addressId": addressId
                });
                address.save();
            } else if (!validator.validatePhone(req.body.phoneNumber)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid mobile number',
                });

            } else if (!validator.validatePin(req.body.pinCode)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid pincode',
                });

            } else if (!validator.validatePin(req.body.pinCode)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid pincode',
                });

            } else if (!validator.validateCity(req.body.city)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid city',
                });

            } else if (!validator.validateState(req.body.state)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid state',
                });

            }


        } else {
            res.status(400).json({
                status: 'error',
                results: 'user not registered',
            });
        }


    } catch (err) {
        console.log(err);
        res.status(400).json({

            "message": "Something went wrong",
        })
    }

}

//modify address
exports.modifyAddress = async (req, res) => {
    try {
        const user = await User.find({
            userId: req.params.userid
        });
        if (user.length != 0) {
            if (validator.validatePhone(req.body.phoneNumber) &&
                validator.validatePin(req.body.pinCode) &&
                validator.validateCity(req.body.city) &&
                validator.validateState(req.body.state)) {
                const modified = await addressModel.findOneAndUpdate({
                    userId: req.params.userid,
                    addressId: req.params.addressid
                }, {
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    pinCode: req.body.pinCode,
                    phoneNumber: req.body.phoneNumber,
                });
                if (modified) {
                    res.status(200).json({
                        status: 'success',
                        data: {
                            modified,
                        },
                    });
                } else {
                    res.status(400).json({
                        status: 'fail',
                        data: {
                            message: `address is not updated `,
                        },
                    });
                }

            } else if (!validator.validatePhone(req.body.phoneNumber)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid mobile number',
                });

            } else if (!validator.validatePin(req.body.pinCode)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid pincode',
                });

            } else if (!validator.validatePin(req.body.pinCode)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid pincode',
                });

            } else if (!validator.validateCity(req.body.city)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid city',
                });

            } else if (!validator.validateState(req.body.state)) {
                res.status(400).json({
                    status: 'error',
                    results: 'Enter valid state',
                });

            }
        } else {
            res.status(400).json({
                status: 'error',
                results: 'user not registered',
            });

        }

    } catch (err) {
        console.log(err);
        res.status(404).json({

            status: 'fail',
            message: err,
        });
    }

}

//delete address
exports.deleteAddress = async (req, res) => {

    try {
        const user = await User.find({
            userId: req.params.userid
        });
        if (user.length != 0) {
            const addressdata = await addressModel.deleteOne({
                userId: req.params.userid,
                addressId: req.params.addressid
            });
            if (addressdata.length == 0) {
                res.status(400).json({
                    status: 'fail',
                    data: {
                        message: `address is not deleted `,
                    },
                });


            } else {
                res.status(200).json({
                    status: 'success',
                    data: {
                        message: 'address deleted succefully',
                    },
                });
            }
        } else {
            res.status(400).json({
                status: 'error',
                results: 'user not registered',
            });

        }

    } catch {
        console.log(err);
        res.status(404).json({

            status: 'fail',
            message: err,
        });

    }
}

//view shipping address
exports.viewAddress = async (req, res) => {
    try {
        const user = await User.find({
            userId: req.params.userid
        });
        if (user.length != 0) {
            const addressDetails = await addressModel.find({
                userId: req.params.userid
            });
            if (addressDetails.length != 0) {
                res.status(200).json({
                    status: 'success',
                    data: {
                        addressDetails,
                    },
                });

            } else {
                res.status(400).json({
                    status: 'fail',
                    data: {
                        message: `Unable to get address details `,
                    },
                });

            }
        } else {
            res.status(400).json({
                status: 'error',
                results: 'user not registered',
            });

        }

    } catch {
        console.log(err);
        res.status(404).json({

            status: 'fail',
            message: err,
        });

    }
}

exports.addProduct = async (req, res) => {

    try {
        const getId = await productModel.find({});
        let productId = `PI-${1+getId.length}`;
        console.log(req.body);
        const product = await productModel.create({
            productId: productId,
            displayName: req.body.displayName,
            shortDesc: req.body.shortDesc,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
            deliveryCharge: req.body.deliveryCharge,
        })
        res.status(200).json({
            "message": "Product Successfully added",
            "productId": productId
        });
    } catch (err) {
        res.status(400).json({
            "message": "Something went wrong",
        })
    }
}

exports.myMethod = async (req, res) => {
    res.send('Welcome');
};

exports.myaboutMethod = async (req, res) => {
    res.send('About us');
};