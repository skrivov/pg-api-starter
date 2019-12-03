import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res) => {
  const findAllQuery = `SELECT  sessions.title, sessions.time, sessions.description, speakers."firstName", speakers."lastName" FROM sessions
                        LEFT JOIN speakers ON speakers.id=sessions."speakerId"`;
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send(rows);
    } catch(error) {
      return res.status(400).send(error);
    }
   
});

router.get('/:sessionId', async (req, res) => {
   
  return res.send({});
});

router.post('/', async (req, res) => {
  // const session = await req.context.models.Session.create({
  //   title: req.body.firstName,
  //   time: req.body.lastName,
  //   description: req.body.bio,
  // });

  return res.send(true);
});

router.delete('/:sessionId', async (req, res) => {
  // const result = await req.context.models.Session.destroy({
  //   where: { id: req.params.sessionId },
  // });

  return res.send(true);
});

export default router;
