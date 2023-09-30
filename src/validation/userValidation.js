import * as Yup from 'yup';

export const userValidationSchema = Yup.object().shape({
    fullname: Yup.string().required('Nome completo é obrigatório'),
    username: Yup.string().required('Username é obrigatório'),
    email: Yup.string().email().required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatória').min(6).max(8),
    confirmPassword: Yup
    .string()
    .required('Confirmar senha é obrigatório')
    .oneOf([Yup.ref('password'), null], 'Confirmação de senha não coincide'),
    acceptTerms: Yup.bool().oneOf([true], 'Aceite dos termos é obrigatório'),
})