import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name: yup.string().min(3, 'name must be at least 3 characters').max(15, 'maximum of 15 characters allowed').required('please enter name'),
    email: yup.string().email().required(),
    password: yup.string().min(3).required('please enter password'),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required('please enter email'),
    password: yup.string().required('please enter password'),
})