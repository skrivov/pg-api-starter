import { Router } from 'express';
import db from '../db';
const router = Router();

router.get('/', async (req, res) => {
  const findAllQuery = 'SELECT * FROM public.speakers';
  try {
    const { rows, rowCount } = await db.query(findAllQuery);
    return res.status(200).send(rows);
  } catch(error) {
    return res.status(400).send(error);
  }
});

router.get('/:speakerId', async (req, res) => {
  // const speaker = await req.context.models.Speaker.findByPk(
  //   req.params.speakerId,
  // );
  return res.send(true);
});

router.post('/', async (req, res) => {
  // const speaker = await req.context.models.Speaker.create({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   bio: req.body.bio,
  // });

  return res.send(true);
});

router.delete('/:speakerId', async (req, res) => {
  // const result = await req.context.models.Speaker.destroy({
  //   where: { id: req.params.speakerId },
  // });

  return res.send(true);
});

export default router;
