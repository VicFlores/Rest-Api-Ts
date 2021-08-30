import { Router } from 'express';
import { deletePerson, getPerson, postPerson, putPerson } from '../controllers/personControllers';

export const personRoute = (router: Router) => {
    router.get('/api', getPerson);
    router.post('/api/add-person', postPerson);
    router.put('/api/update-person/:id', putPerson);
    router.delete('/api/delete-person/:id', deletePerson)
}