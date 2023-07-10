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

export const addJobSchema = yup.object().shape({
    position: yup.string().required(),
    company: yup.string().required(),
    job_location: yup.string().required('job location is a required field'),
    status: yup.string().required(),
    job_type: yup.string().required('job type is a required field')
})
export const updateProfileSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required('last name is a required field'),
    email: yup.string().required(),
    location: yup.string().required(),
})