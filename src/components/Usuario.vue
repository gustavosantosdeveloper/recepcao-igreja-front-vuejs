<script>
    import Service from '../services/usuario-service'
    export default {
        name:'Usuario',
        data(){
            return{
               usuario:{
                email:'teste',
                senha:'***'

               }
            }
        },
        propos:{
          
        },
        methods:{
            criar(){
                const s = new Service();
                s.criar(this.usuario).then(retorno=>{
                    console.log(retorno)
                })
            }
        }
    }
</script>
<template>
    <div>
        <span class="p-input-icon-left">
            <i class="pi pi-user" />
            <InputText type="text" v-model="usuario.email" placeholder="Email" />
        </span>
        <span class="p-input-icon-left">
            <i class="pi pi-lock" />
            <InputText type="text" v-model="usuario.senha" placeholder="Senha" />
        </span>
    </div>
    <div>
        <button type="button" @click="criar()">Enviar</button>
    </div>
</template>

