import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer } from "./styles";
import { useHistory } from "react-router-dom";

export default function Form() {

    const formSchema = yup.object().shape({
        username: yup.string().required('Nome obrigatorio'),
        password: yup.string().required('Senha obrigatorio')
    })

    const history = useHistory()

    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    return (

        <FormContainer>
            <h1>Kenzie Shop</h1>
            <h3>Login</h3>
            <span>

                <input placeholder='Nome de usuário' {...register('username')} />
                <p>{errors.username?.message}</p>

                <input placeholder='Senha' type='password' {...register('password')} />
                <p>{errors.password?.message}</p>

                <button type='submit' onClick={() => history.push('/dashboard')}>Logar!</button>

            </span>
        </FormContainer>
    )
}
