import { prisma } from "../connection/factory"
import { cadastroModel } from "./cadastro_model"
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

export class cadastroController{
    private usModel:cadastroModel
    constructor(usModel?){
        if(usModel){
            this.usModel = usModel
        }
    }
    async salvar(){
        console.log(this.usModel)
       try {
        let usuario = await prisma.usuarios.create({
            data:{
                id:this.usModel.getId(),
                email:this.usModel.getEmail(),
                senha: await this.usModel.getSenha(),
                nome: this.usModel.getNome(),
                cidade: this.usModel.getCidade(),
                estado: this.usModel.getEstado(),
                telefone: this.usModel.getTelefone(),
                conta_Ativa: this.usModel.getConta_Ativa(),
                data_criacao: this.usModel.getDataCriacao()
            }
        })
        await this.sendEmail()
       } catch (error) {
         throw new Error("Houve um erro ao salvar o usuário! "+error.message)
       }
    }
    async sendEmail(){  
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, 
            auth: {
                user: 'chama.suporte.dont.reply@gmail.com', 
                pass: 'uppvpekuhkaeroco', 
            },
        });
        const idHash = jwt.sign({id: this.usModel.getId()}, process.env.JWT_SECRET, {expiresIn:"1h"})
        let info = await transporter.sendMail({
            from: 'Projeção agricola<jose.farley@academico.ifpb.edu.b>',
            to: this.usModel.getEmail(), 
            subject: "Confirmação de Email ✔", 
            html: "<strong>Para ativar sua conta basta clickar no link: <strong>"+`<a href ='http://localhost:8080/confirmar/${idHash}'>http://localhost:8080/confirmar/${idHash}</a>`
        });
        console.log(idHash)
        console.log('Email enviado!')
    }
    async getAlluser(){
        const users = await prisma.usuarios.findMany()
        return users
    }

    async activeAccount(id){
        const user = await prisma.usuarios.update({
            where: {id:id},
            data:{conta_Ativa:true}
        })
    }
    async getOneUser(id){
        const user = await prisma.usuarios.findFirst({
            where:{
                id:id
            }
        })
        return user
    }
    async getOneUserByEmail(email){
        const user = await prisma.usuarios.findFirst({
            where:{
                email:email
            }
        })
        return user
    }
      
}