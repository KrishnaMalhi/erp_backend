import * as bcrypt from "bcrypt"
export const bcryptEncryption = async (password: string) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
};

export const bcryptEncryptionComparision = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
};