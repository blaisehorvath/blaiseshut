/**
 * Created by v on 8/19/16.
 */

/*eslint-disable no-unused-vars, no-undef, no-console*/
/*Modules*/
import React from "react";
import credential from "credential"


let pw = credential();
let admins = {
    Viktor: {
        hash: ""
    },
    Blaise: {
        hash: ""
    }
};

const saltRounds = 10;
/*TODO: Make sure theres no ";" in the hash, to make it work in any browser....*/
pw.hash("qwertz", (err, hash)=> {
    if (err) throw err;
    admins.Viktor.hash = hash
});
pw.hash("Seabythelive", (err, hash)=> {
    if (err) throw err;
    admins.Blaise.hash = hash
});
const checkHash = (name, hash)=> {
    return new Promise((resolve, reject)=> { //TODO: make a result variable and resolve that...
        if (name in admins) {
            if ("hash" in admins[name]) {
                resolve(hash === admins[name].hash);
            }
            else resolve(false);
        }
        else resolve(false);
    })
};
const checkPassword = (name, password)=> {
    return new Promise((resolve, reject)=> {
        if (name in admins) {
            pw.verify(admins[name].hash, password, (err, isValid)=> {
                if (err) throw err;
                resolve(isValid)
            })
        }
        else resolve(false)
    });
};

export {checkHash, checkPassword, admins}