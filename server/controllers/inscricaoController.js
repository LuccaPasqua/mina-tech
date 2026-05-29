const repo = require('../repository');

/** POST /api/inscricao — cria uma inscrição pública (status "pendente"). */
async function create(req, res, next) {
  try {
    const row = await repo.createInscricao(req.validatedInscricao);
    res
      .status(201)
      .json({ message: 'Inscrição realizada com sucesso!', id: row.id });
  } catch (err) {
    next(err);
  }
}

module.exports = { create };
