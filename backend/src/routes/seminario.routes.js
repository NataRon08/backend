import { Router } from 'express'
import { listSeminarios, getSeminario, createSeminario, updateSeminario, deleteSeminario } from '../controllers/seminario.controller.js'

const router = Router()

router.get('/', listSeminarios)
router.get('/:id', getSeminario)
router.post('/', createSeminario)
router.put('/:id', updateSeminario)
router.delete('/:id', deleteSeminario)

export default router
