const bcrypt = require("bcryptjs");

const zxc = async () => {
    let hash = await bcrypt.hashSync('myPassword', 10);

    if(bcrypt.compareSync('myPassword', hash)) {
        console.log('tak');
       } else {
        console.log('nie');
       }
}

zxc();

