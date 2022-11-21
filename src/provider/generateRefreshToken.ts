import { prisma } from '../useCases/connection/factory'
import  dayjs  from 'dayjs'
import { isDataView } from 'util/types'

class generateRefreshToken {
    async execute(usuarioId:string){
        const expiresIn = dayjs().add(15, "second").unix()
        const generateRefreshToken = await prisma.refreshToken.create({
            data:{
                expiresIn:expiresIn,
                usuarioId:usuarioId
            }
        })
        return generateRefreshToken
    }
}
export {
    generateRefreshToken
}