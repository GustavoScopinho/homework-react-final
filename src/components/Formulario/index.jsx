import { useForm } from "react-hook-form"
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { object, string } from 'yup'
import styles from '../Formulario/Formulario.module.css'
import axios from "axios"


const schema = yup
  .object({
    name: string().required('Digite seu nome'),
    email: string().email('Digite um e-mail valido').required('Campo e-mail obrigatório'),
    content: string().required('Digite uma sugestão')
  })
  .required()

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })


  function onSubmitForm(data) {
     axios.post('http://localhost:5000/Sugestao', data);
     window.alert(`Sugestão enviada!`) ;
     window.location.reload()
  }
  

  return (
    <div className={styles.containerGeral}>
      <div className={styles.containerFormulario}>
        <h1>Tem alguma sugestão? manda pra gente!</h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className={styles.field}>
            <label className="label">Nome</label>
            <input type="text" {...register('name')} />
            <span>{errors.name?.message}</span>
          </div>

          <div className={styles.field}>
            <label className="label">Email</label>
            <input type="email" {...register('email')}/>
            <span>{errors.email?.message}</span>
          </div>

          <div className={styles.field}>
            <label className="label">Sugestão</label>
            <textarea {...register('content')} />
            <span>{errors.content?.message}</span>
          </div>

          <button className={styles.btnForm} type="submit">Enviar</button>
        </form>
      </div>

    </div>
  )
}