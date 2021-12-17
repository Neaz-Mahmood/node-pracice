const { object, string, number, array, ref} =  require('yup');

const isEmailValid = email =>{
    if(!email) return false;
    const part = email.split('@');
    const emailParts = part[0];
    return emailParts.length<=64;
}

const userSchema = object.shape({
    username: string()
        .min(3, 'Username must be at least 3 character long.')
        .max(50, 'Username must be at most 50 character long.')
        .required('Username is required.'),
    email: string()
        .email('This field should be a valid email address.')
        .min(8, 'Email must be at least 8 character long.')
        .max(100, 'Email must be at most 100 character long.')
        .required('Email is required.')
        .test('is-valid-email-length','The part before @ of the email can be maximum 64 character',
            email=> isEmailValid(email)),
    password: string()
        .min(8, 'The password must be at least 8 character long.')
        .max(50, 'The password must be at most 50 character long.')
        .required('Password is required.'),
    confirm_password: string()
        .required('This field must not be empty.')
        .oneOf([ref(password), null], 'Passwords must match.')
});

const userUpdateSchema = object.shape({
    username: string()
        .min(3, 'Username must be at least 3 character long.')
        .max(50, 'Username must be at most 50 character long.'),
    email: string()
        .email('This field should be a valid email address.')
        .min(8, 'Email must be at least 8 character long.')
        .max(100, 'Email must be at most 100 character long.')
        .test('is-valid-email-length','The part before @ of the email can be maximum 64 character',
            email=> isEmailValid(email))
});

module.exports.userSchema = userSchema;
module.exports.userUpdateSchema = userUpdateSchema;